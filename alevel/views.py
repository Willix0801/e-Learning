from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
from alevel.models import *
import sys
from datetime import datetime
from django.utils import timezone
import sched, time
import json


@csrf_exempt
def addsubject_s4(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                if senior_four_subjects.objects.filter(subject=str(request.POST.get('subject_name'))).exclude(deleted=True).exists():
                    
                    json_r['success'] = False
                    json_r['msg'] = str(request.POST.get('subject_name'))+" already exists"
                
                else:

                    n_subject = senior_four_subjects()
                    n_subject.subject = request.POST.get('subject_name')
                    n_subject.registered_by = request.user
                    if(len(str(request.POST.get('subject_desc')))>0):
                        n_subject.notes = str(request.POST.get('subject_desc'))
                      
                    n_subject.save()
                      
                    json_r['success'] = True
                    json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []
            
@csrf_exempt
def gets4_subjects(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            if request.method == 'POST':
                
                arr = []
                user_full_names = ""
                s4_subjects = senior_four_subjects.objects.all().exclude(deleted=True).order_by('subject')
                
                if 'pattern' in request.POST.keys():
                    pattern=request.POST['pattern']
                    s4_subjects=s4_subjects.filter(Q(subject__icontains=pattern) | Q(notes__icontains=pattern)).order_by('subject')
                
                      
                for x in s4_subjects:
                    
                    if User.objects.get(pk=x.registered_by_id).is_superuser:
                        user_full_names = "Super Administrator"
                    else:
                        user_full_names = User.objects.get(pk=x.registered_by_id).get_full_name()
                        
                    dicts = {}
                    dicts['id'] = x.id
                    dicts['subject'] = x.subject
                    dicts['notes'] = x.notes
                    dicts['registered_by'] = user_full_names
                    dicts['registered_on'] = x.registered_on.__format__('%d %b %Y %I:%M%p')
                    mapped = {'dicts': dicts}
                    arr.append(mapped)
                    response = {'response': arr}
    
                return HttpResponse(json.dumps(response))
            
        except:
            []
            #import sys
            #print "Unexpected error:", sys.exc_info()[0]
            
    return HttpResponse(json.dumps('Failed to Load')) 

@csrf_exempt
def addsubject_s4_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                if senior_four_video_links.objects.filter(link=request.POST.get('link')).exclude(deleted=True).exists():
                    
                    json_r['success'] = False
                    json_r['msg'] = str(request.POST.get('link'))+" already exists"
                
                else:

                    video_link = senior_four_video_links()
                    video_link.title = request.POST.get('title')
                    video_link.registered_by = request.user
                    video_link.link= request.POST.get('link')
                    video_link.senior_four_id = int(request.POST.get('subject_id'))
                    if(len(str(request.POST.get('description')))>0):
                        video_link.description = str(request.POST.get('description'))
                      
                    video_link.save()
                      
                    json_r['success'] = True
                    json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []   

@csrf_exempt
def gets4_subject_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            if request.method == 'POST':
                
                arr = []
                user_full_names = ""
                s4_subject_links = senior_four_video_links.objects.filter(senior_four=int(request.POST.get('subject_id'))).exclude(deleted=True).order_by('title')
                
                
                if 'pattern' in request.POST.keys():
                    pattern=request.POST['pattern']
                    s4_subject_links=s4_subject_links.filter(Q(title__icontains=pattern) | Q(description__icontains=pattern)).order_by('title')
                
                      
                for x in s4_subject_links:
                    
                    if User.objects.get(pk=x.registered_by_id).is_superuser:
                        user_full_names = "Super Administrator"
                    else:
                        user_full_names = User.objects.get(pk=x.registered_by_id).get_full_name()
                        
                    dicts = {}
                    dicts['id'] = x.id
                    dicts['title'] = x.title
                    dicts['description'] = x.description
                    dicts['registered_by'] = user_full_names
                    dicts['link'] = x.link
                    dicts['registered_on'] = x.registered_on.__format__('%d %b %Y %I:%M%p')
                    mapped = {'dicts': dicts}
                    arr.append(mapped)
                    response = {'response': arr}
    
                return HttpResponse(json.dumps(response))
            
        except:
            []
            #import sys
            #print "Unexpected error:", sys.exc_info()[0]
            
    return HttpResponse(json.dumps('Failed to Load')) 

@csrf_exempt
def addsubject_s5(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                if senior_five_subjects.objects.filter(subject=str(request.POST.get('subject_name'))).exclude(deleted=True).exists():
                    
                    json_r['success'] = False
                    json_r['msg'] = str(request.POST.get('subject_name'))+" already exists"
                
                else:

                    n_subject = senior_five_subjects()
                    n_subject.subject = request.POST.get('subject_name')
                    n_subject.registered_by = request.user
                    if(len(str(request.POST.get('subject_desc')))>0):
                        n_subject.notes = str(request.POST.get('subject_desc'))
                      
                    n_subject.save()
                      
                    json_r['success'] = True
                    json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []
            
@csrf_exempt
def addsubject_s5_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                if senior_five_video_links.objects.filter(link=request.POST.get('link')).exclude(deleted=True).exists():
                    
                    json_r['success'] = False
                    json_r['msg'] = str(request.POST.get('link'))+" already exists"
                
                else:

                    video_link = senior_five_video_links()
                    video_link.title = request.POST.get('title')
                    video_link.registered_by = request.user
                    video_link.link= request.POST.get('link')
                    video_link.senior_five_id = int(request.POST.get('subject_id'))
                    if(len(str(request.POST.get('description')))>0):
                        video_link.description = str(request.POST.get('description'))
                      
                    video_link.save()
                      
                    json_r['success'] = True
                    json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []  
            
@csrf_exempt
def gets5_subject_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            if request.method == 'POST':
                
                arr = []
                user_full_names = ""
                s5_subject_links = senior_five_video_links.objects.filter(senior_five=int(request.POST.get('subject_id'))).exclude(deleted=True).order_by('title')
                
                
                if 'pattern' in request.POST.keys():
                    pattern=request.POST['pattern']
                    s5_subject_links=s5_subject_links.filter(Q(title__icontains=pattern) | Q(description__icontains=pattern)).order_by('title')
                
                      
                for x in s5_subject_links:
                    
                    if User.objects.get(pk=x.registered_by_id).is_superuser:
                        user_full_names = "Super Administrator"
                    else:
                        user_full_names = User.objects.get(pk=x.registered_by_id).get_full_name()
                        
                    dicts = {}
                    dicts['id'] = x.id
                    dicts['title'] = x.title
                    dicts['description'] = x.description
                    dicts['registered_by'] = user_full_names
                    dicts['link'] = x.link
                    dicts['registered_on'] = x.registered_on.__format__('%d %b %Y %I:%M%p')
                    mapped = {'dicts': dicts}
                    arr.append(mapped)
                    response = {'response': arr}
    
                return HttpResponse(json.dumps(response))
            
        except:
            []
            #import sys
            #print "Unexpected error:", sys.exc_info()[0]
            
    return HttpResponse(json.dumps('Failed to Load')) 
            
@csrf_exempt
def gets5_subjects(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            if request.method == 'POST':
                
                arr = []
                user_full_names = ""
                s5_subjects = senior_five_subjects.objects.all().exclude(deleted=True).order_by('subject')
                
                if 'pattern' in request.POST.keys():
                    pattern=request.POST['pattern']
                    s5_subjects=s5_subjects.filter(Q(subject__icontains=pattern) | Q(notes__icontains=pattern)).order_by('subject')
                
                      
                for x in s5_subjects:
                    
                    if User.objects.get(pk=x.registered_by_id).is_superuser:
                        user_full_names = "Super Administrator"
                    else:
                        user_full_names = User.objects.get(pk=x.registered_by_id).get_full_name()
                        
                    dicts = {}
                    dicts['id'] = x.id
                    dicts['subject'] = x.subject
                    dicts['notes'] = x.notes
                    dicts['registered_by'] = user_full_names
                    dicts['registered_on'] = x.registered_on.__format__('%d %b %Y %I:%M%p')
                    mapped = {'dicts': dicts}
                    arr.append(mapped)
                    response = {'response': arr}
    
                return HttpResponse(json.dumps(response))
            
        except:
            []
            #import sys
            #print "Unexpected error:", sys.exc_info()[0]
            
    return HttpResponse(json.dumps('Failed to Load')) 

@csrf_exempt
def addsubject_s6(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                if senior_six_subjects.objects.filter(subject=str(request.POST.get('subject_name'))).exclude(deleted=True).exists():
                    
                    json_r['success'] = False
                    json_r['msg'] = str(request.POST.get('subject_name'))+" already exists"
                
                else:

                    n_subject = senior_six_subjects()
                    n_subject.subject = request.POST.get('subject_name')
                    n_subject.registered_by = request.user
                    if(len(str(request.POST.get('subject_desc')))>0):
                        n_subject.notes = str(request.POST.get('subject_desc'))
                      
                    n_subject.save()
                      
                    json_r['success'] = True
                    json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []
            
            
@csrf_exempt
def gets6_subjects(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            if request.method == 'POST':
                
                arr = []
                user_full_names = ""
                s6_subjects = senior_six_subjects.objects.all().exclude(deleted=True).order_by('subject')
                
                if 'pattern' in request.POST.keys():
                    pattern=request.POST['pattern']
                    s6_subjects=s6_subjects.filter(Q(subject__icontains=pattern) | Q(notes__icontains=pattern)).exclude(deleted=True).order_by('subject')
                
                      
                for x in s6_subjects:
                    
                    if User.objects.get(pk=x.registered_by_id).is_superuser:
                        user_full_names = "Super Administrator"
                    else:
                        user_full_names = User.objects.get(pk=x.registered_by_id).get_full_name()
                        
                    dicts = {}
                    dicts['id'] = x.id
                    dicts['subject'] = x.subject
                    dicts['notes'] = x.notes
                    dicts['registered_by'] = user_full_names
                    dicts['registered_on'] = x.registered_on.__format__('%d %b %Y %I:%M%p')
                    mapped = {'dicts': dicts}
                    arr.append(mapped)
                    response = {'response': arr}
    
                return HttpResponse(json.dumps(response))
            
        except:
            []
            #import sys
            #print "Unexpected error:", sys.exc_info()[0]
            
    return HttpResponse(json.dumps('Failed to Load')) 

@csrf_exempt
def addsubject_s6_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                if senior_six_video_links.objects.filter(link=request.POST.get('link')).exclude(deleted=True).exists():
                    
                    json_r['success'] = False
                    json_r['msg'] = str(request.POST.get('link'))+" already exists"
                
                else:

                    video_link = senior_six_video_links()
                    video_link.title = request.POST.get('title')
                    video_link.registered_by = request.user
                    video_link.link= request.POST.get('link')
                    video_link.senior_six_id = int(request.POST.get('subject_id'))
                    if(len(str(request.POST.get('description')))>0):
                        video_link.description = str(request.POST.get('description'))
                      
                    video_link.save()
                      
                    json_r['success'] = True
                    json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []  
            
@csrf_exempt
def gets6_subject_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            if request.method == 'POST':
                
                arr = []
                user_full_names = ""
                s6_subject_links = senior_six_video_links.objects.filter(senior_six=int(request.POST.get('subject_id'))).exclude(deleted=True).order_by('title')
                
                
                if 'pattern' in request.POST.keys():
                    pattern=request.POST['pattern']
                    s6_subject_links=s6_subject_links.filter(Q(title__icontains=pattern) | Q(description__icontains=pattern)).order_by('title')
                
                      
                for x in s6_subject_links:
                    
                    if User.objects.get(pk=x.registered_by_id).is_superuser:
                        user_full_names = "Super Administrator"
                    else:
                        user_full_names = User.objects.get(pk=x.registered_by_id).get_full_name()
                        
                    dicts = {}
                    dicts['id'] = x.id
                    dicts['title'] = x.title
                    dicts['description'] = x.description
                    dicts['registered_by'] = user_full_names
                    dicts['link'] = x.link
                    dicts['registered_on'] = x.registered_on.__format__('%d %b %Y %I:%M%p')
                    mapped = {'dicts': dicts}
                    arr.append(mapped)
                    response = {'response': arr}
    
                return HttpResponse(json.dumps(response))
            
        except:
            []
            #import sys
            #print "Unexpected error:", sys.exc_info()[0]
            
    return HttpResponse(json.dumps('Failed to Load')) 

@csrf_exempt
def editsubject_s4(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}

                n_subject = senior_four_subjects.objects.get(id=request.POST.get("pk"))
                n_subject.subject = request.POST.get('subject_name')
                
                if(len(str(request.POST.get('subject_desc')))>0):
                    n_subject.notes = str(request.POST.get('subject_desc'))
                      
                n_subject.save()
                      
                json_r['success'] = True
                json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []
            
@csrf_exempt
def editsubject_s5(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                n_subject = senior_five_subjects.objects.get(id=request.POST.get("pk"))
                n_subject.subject = request.POST.get('subject_name')
                if(len(str(request.POST.get('subject_desc')))>0):
                    n_subject.notes = str(request.POST.get('subject_desc'))
                      
                n_subject.save()
                      
                json_r['success'] = True
                json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
                
        except:
            []
            
@csrf_exempt
def editsubject_s6(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                

                n_subject = senior_six_subjects.objects.get(id=request.POST.get("pk"))
                n_subject.subject = request.POST.get('subject_name')
                if(len(str(request.POST.get('subject_desc')))>0):
                    n_subject.notes = str(request.POST.get('subject_desc'))
                      
                n_subject.save()
                      
                json_r['success'] = True
                json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []
            
@csrf_exempt
def editsubject_s4_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}

                video_link = senior_four_video_links.objects.get(id=request.POST.get("pk"))
                video_link.title = request.POST.get('title')
                video_link.link= request.POST.get('link')
                if(len(str(request.POST.get('description')))>0):
                    video_link.description = str(request.POST.get('description'))
                      
                video_link.save()
                      
                json_r['success'] = True
                json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []   
            
@csrf_exempt
def editsubject_s5_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}

                video_link = senior_five_video_links.objects.get(id=request.POST.get("pk"))
                video_link.title = request.POST.get('title')
                video_link.link= request.POST.get('link')
                if(len(str(request.POST.get('description')))>0):
                    video_link.description = str(request.POST.get('description'))
                      
                video_link.save()
                      
                json_r['success'] = True
                json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            [] 
            
@csrf_exempt
def editsubject_s6_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}

                video_link = senior_six_video_links.objects.get(id=request.POST.get("pk"))
                video_link.title = request.POST.get('title')
                video_link.link= request.POST.get('link')
                if(len(str(request.POST.get('description')))>0):
                    video_link.description = str(request.POST.get('description'))
                      
                video_link.save()
                      
                json_r['success'] = True
                json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []  
            

@csrf_exempt            
def delsubject(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        if request.method == 'POST':
            
            try:
                
                if(request.POST.get("class_c")=="S4"):
                    n_subject = senior_four_subjects.objects.get(id=request.POST.get("pk"))
                    print(request.POST.get("pk"))
                    n_subject.deleted=True
                    n_subject.save()
                
                if(request.POST.get("class_c")=="S5"):
                    n_subject = senior_five_subjects.objects.get(id=request.POST.get("pk"))
                    n_subject.deleted=True
                    n_subject.save()
                        
                if(request.POST.get("class_c")=="S6"):
                    n_subject = senior_six_subjects.objects.get(id=request.POST.get("pk"))
                    n_subject.deleted=True
                    n_subject.save()
                        
                response = json.dumps('Successfully')  
                return HttpResponse(response)
            
            except:
                print("ok")
                import sys
                print "Unexpected error:", sys.exc_info()[0]
                
@csrf_exempt            
def delsubjectlink(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        if request.method == 'POST':
            
            try:
                
                if(request.POST.get("class_c")=="S4"):
                    n_subject_l = senior_four_video_links.objects.get(id=request.POST.get("pk"))
                    n_subject_l.deleted=True
                    n_subject_l.save()
                
                if(request.POST.get("class_c")=="S5"):
                    n_subject = senior_five_video_links.objects.get(id=request.POST.get("pk"))
                    n_subject.deleted=True
                    n_subject.save()
                        
                if(request.POST.get("class_c")=="S6"):
                    n_subject_l = senior_six_video_links.objects.get(id=request.POST.get("pk"))
                    n_subject_l.deleted=True
                    n_subject_l.save()
                        
                response = json.dumps('Successfully')  
                return HttpResponse(response)
            
            except:
                print("ok")
                import sys
                print "Unexpected error:", sys.exc_info()[0]
            
            