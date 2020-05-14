from django.shortcuts import render, render_to_response
from django.http import HttpResponse, HttpResponseRedirect
import smtplib
from django.contrib import auth
from django.views.decorators.csrf import csrf_exempt
# from django.contrib.auth import authenticate, login, logout
from django.core.context_processors import csrf 
from django.contrib.auth.models import User
import json
import sys


@csrf_exempt
def index(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        c = {}
        c.update(csrf(request))           
        return render(request, 'index.html', c)
    
     

@csrf_exempt   
def login(request):
    c = {}
    c.update(csrf(request))
    return render_to_response('login.html', c)

@csrf_exempt
def names(request):
    json_r = {}
    
    if request.user.is_superuser:
        json_r['names'] = "Super Administrator"
        json_r['superuser'] = True
    else:
        json_r['names'] = request.user.username
        json_r['superuser'] = False
    
    return HttpResponse(json.dumps(json_r))

@csrf_exempt
def profile(request):
    json_r = {}
    
    if request.user.is_superuser:
        json_r['names'] = "Super Administrator"
        json_r['superuser'] = True
    else:
        json_r['username'] = request.user.username
        json_r['superuser'] = False
    
    return HttpResponse(json.dumps(json_r))


@csrf_exempt 
def send_emaill(username, receiver, platform):
    content = str(username) +' a new login from Intouch Communications-LTD System from '+platform
    mail = smtplib.SMTP('smtp.gmail.com', 587)
    mail.ehlo()
    mail.starttls()
    mail.login('intouchcommunications8@gmail.com', 'extjs0783204240@')
    mail.sendmail('intouchcommunications8@gmail.com', receiver, content)
    
@csrf_exempt
def login_user(request):
    
    username = str(request.POST.get('username'))
    username = username.strip()
    password = request.POST.get('password')
    platform = str(request.POST.get('platform'))
    print platform
    user = auth.authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            auth.login(request, user)
#             current_user = request.user
#             full_names = current_user.get_full_name()
#             email = current_user.email
#             send_emaill(full_names, email, platform)
            return HttpResponse(json.dumps('/'))   
    else: 
        []
    return HttpResponse(json.dumps('User Name and/or Password not correct'))

@csrf_exempt
def createacc(request):
    try:
        if request.method == 'POST':
            
            
            if User.objects.filter(username = request.POST.get('username')).exists():
                return HttpResponse(json.dumps('User Name Already Exists.')) 
            else:
                total = User.objects.all()
                total = total.count()
                user = User()
                names = str(request.POST.get('names')) 
                names = names.replace(' ', '')+str(total+1)
                user.username = names
                #user.first_name = request.POST.get('firstname')
                #user.last_name = request.POST.get('lastname')
                user.email = "nonmail@email.com"
                user.set_password(request.POST.get('password'))
                user.is_staff = True,
                user.is_active = True,
                user.save() 
                return HttpResponse(json.dumps('Successfully created an account with '+"USERNAME: "+names))
    except:
        print 'unexpected error', sys.exc_info()[0]
        raise


@csrf_exempt
def logout(request):
    auth.logout(request)
    return HttpResponseRedirect('/login')
        

            
            
      
    