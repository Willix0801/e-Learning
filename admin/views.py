from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
import sys
import json

@csrf_exempt
def getusers(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        try:
    
            users = User.objects.all().exclude(is_superuser=True).order_by('first_name','last_name')
            if 'pattern' in request.POST.keys():
                pattern=request.POST['pattern']
                users=users.filter(Q(is_staff=True) & (Q(username__icontains=pattern) | Q(first_name__icontains=pattern) | Q(last_name__icontains=pattern) | Q(email__icontains=pattern))).exclude(is_superuser=True).order_by('first_name','last_name')
            arr = []
            for user in users:
                
                fields = {}
                fields['id'] = user.id,
                fields['username'] = user.username,
                fields['firstname'] = user.first_name,
                fields['lastname'] = user.last_name,
                fields['email'] = user.email
                fields['created'] = user.date_joined.__format__('%d %b %Y %I:%M%p'),
                fields['lastlogin'] = user.last_login.__format__('%d %b %Y %I:%M%p'),
                fields['active'] = user.is_active,
                fields['password'] = user.password,
                
                mapped = {'fields': fields}
    #             print mapped
                
                arr.append(mapped)
                response = {'response': arr}
            return HttpResponse(json.dumps(response))
        
        except:
            []
#             print "Unexpected error:", sys.exc_info()[0]
#             raise
    return HttpResponse(json.dumps('Failed to Load Users'))

@csrf_exempt
def addUser(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            
            if request.method == 'POST':
                if User.objects.filter(username = request.POST.get('username')).exists():
                    return HttpResponse(json.dumps('User Name Already Exists.')) 
                else:
                    
                    user = User()
                    user.username = request.POST.get('username')
                    user.first_name = request.POST.get('firstname')
                    user.last_name = request.POST.get('lastname')
                    user.email = request.POST.get('email')
                    user.set_password(request.POST.get('password'))
                    user.is_staff = True,
                    user.is_active = True,
                    user.save()                    
                    return HttpResponse(json.dumps('Successfully Created a New User Account'))
                
        except:
            print 'unexpected error', sys.exc_info()[0]
            raise
        
@csrf_exempt
def editUser(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        if request.method == 'POST':
                
            prik = request.POST.get('primarykey')
            user = User.objects.get(id=prik)
            user.username = request.POST.get('username')
            user.first_name = request.POST.get('firstname')
            user.last_name = request.POST.get('lastname')
            user.email = request.POST.get('email')
                
            if user.password != request.POST.get('password'):
                user.set_password(request.POST.get('password'))
                    
            user.is_staff = True,
            user.is_active = True,
            user.save()
                
                
                
            response = json.dumps('Successfully edited a user account')  
            return HttpResponse(response) 
        
    return HttpResponse(json.dumps('Failed to create a user account'))

@csrf_exempt
def delUser(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        if request.method == 'POST':
            user = User.objects.get(id=request.POST.get('primarykey'))
            user.delete()
            return HttpResponse(json.dumps('Successfully deleted a user account'))