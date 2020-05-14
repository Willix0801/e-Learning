from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
from olevel.models import *
import sys
from datetime import datetime
from django.utils import timezone
import sched, time
import json
from _ast import If

@csrf_exempt
def addsubject_s1(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                if senior_one_subjects.objects.filter(subject=str(request.POST.get('subject_name'))).exclude(deleted=True).exists():
                    
                    json_r['success'] = False
                    json_r['msg'] = str(request.POST.get('subject_name'))+" already exists"
                
                else:

                    n_subject = senior_one_subjects()
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
def gets1_subjects(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            if request.method == 'POST':
                
                arr = []
                user_full_names = ""
                s1_subjects = senior_one_subjects.objects.all().exclude(deleted=True).order_by('subject')
                
                if 'pattern' in request.POST.keys():
                    pattern=request.POST['pattern']
                    s1_subjects=s1_subjects.filter(Q(subject__icontains=pattern) | Q(notes__icontains=pattern)).order_by('subject')
                
                      
                for x in s1_subjects:
                    
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
def addsubject_s1_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                if senior_one_video_links.objects.filter(link=request.POST.get('link')).exists():
                    
                    json_r['success'] = False
                    json_r['msg'] = str(request.POST.get('link'))+" already exists"
                
                else:

                    video_link = senior_one_video_links()
                    video_link.title = request.POST.get('title')
                    video_link.registered_by = request.user
                    video_link.link= request.POST.get('link')
                    video_link.senior_one_id = int(request.POST.get('subject_id'))
                    if(len(str(request.POST.get('description')))>0):
                        video_link.description = str(request.POST.get('description'))
                      
                    video_link.save()
                      
                    json_r['success'] = True
                    json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []
            
@csrf_exempt
def gets1_subject_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            if request.method == 'POST':
                
                arr = []
                user_full_names = ""
                s1_subject_links = senior_one_video_links.objects.filter(senior_one=int(request.POST.get('subject_id'))).exclude(deleted=True).order_by('title')
                
                
                if 'pattern' in request.POST.keys():
                    pattern=request.POST['pattern']
                    s1_subject_links=s1_subject_links.filter(Q(title__icontains=pattern) | Q(description__icontains=pattern)).order_by('title')
                
                      
                for x in s1_subject_links:
                    
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
def addsubject_s2(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                if senior_two_subjects.objects.filter(subject=str(request.POST.get('subject_name'))).exclude(deleted=True).exists():
                    
                    json_r['success'] = False
                    json_r['msg'] = str(request.POST.get('subject_name'))+" already exists"
                
                else:

                    n_subject = senior_two_subjects()
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
def gets2_subjects(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            if request.method == 'POST':
                
                arr = []
                user_full_names = ""
                s2_subjects = senior_two_subjects.objects.all().exclude(deleted=True).order_by('subject')
                
                if 'pattern' in request.POST.keys():
                    pattern=request.POST['pattern']
                    s2_subjects=s2_subjects.filter(Q(subject__icontains=pattern) | Q(notes__icontains=pattern)).order_by('subject')
                
                      
                for x in s2_subjects:
                    
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
def addsubject_s2_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                if senior_two_video_links.objects.filter(link=request.POST.get('link')).exists():
                    
                    json_r['success'] = False
                    json_r['msg'] = str(request.POST.get('link'))+" already exists"
                
                else:

                    video_link = senior_two_video_links()
                    video_link.title = request.POST.get('title')
                    video_link.registered_by = request.user
                    video_link.link= request.POST.get('link')
                    video_link.senior_two_id = int(request.POST.get('subject_id'))
                    if(len(str(request.POST.get('description')))>0):
                        video_link.description = str(request.POST.get('description'))
                      
                    video_link.save()
                      
                    json_r['success'] = True
                    json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []   
            
@csrf_exempt
def gets2_subject_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            if request.method == 'POST':
                
                arr = []
                user_full_names = ""
                s2_subject_links = senior_two_video_links.objects.filter(senior_two=int(request.POST.get('subject_id'))).exclude(deleted=True).order_by('title')
                
                
                if 'pattern' in request.POST.keys():
                    pattern=request.POST['pattern']
                    s2_subject_links=s2_subject_links.filter(Q(title__icontains=pattern) | Q(description__icontains=pattern)).order_by('title')
                
                      
                for x in s2_subject_links:
                    
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
def addsubject_s3(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                if senior_three_subjects.objects.filter(subject=str(request.POST.get('subject_name'))).exclude(deleted=True).exists():
                    
                    json_r['success'] = False
                    json_r['msg'] = str(request.POST.get('subject_name'))+" already exists"
                
                else:

                    n_subject = senior_three_subjects()
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
def gets3_subjects(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            if request.method == 'POST':
                
                arr = []
                user_full_names = ""
                s3_subjects = senior_three_subjects.objects.all().exclude(deleted=True).order_by('subject')
                
                if 'pattern' in request.POST.keys():
                    pattern=request.POST['pattern']
                    s3_subjects=s3_subjects.filter(Q(subject__icontains=pattern) | Q(notes__icontains=pattern)).order_by('subject')
                
                      
                for x in s3_subjects:
                    
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
def addsubject_s3_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                
                if senior_three_video_links.objects.filter(link=request.POST.get('link')).exists():
                    
                    json_r['success'] = False
                    json_r['msg'] = str(request.POST.get('link'))+" already exists"
                
                else:

                    video_link = senior_three_video_links()
                    video_link.title = request.POST.get('title')
                    video_link.registered_by = request.user
                    video_link.link= request.POST.get('link')
                    video_link.senior_three_id = int(request.POST.get('subject_id'))
                    if(len(str(request.POST.get('description')))>0):
                        video_link.description = str(request.POST.get('description'))
                      
                    video_link.save()
                      
                    json_r['success'] = True
                    json_r['msg'] = "Successfully"
                                                
            return HttpResponse(json.dumps(json_r))
        
        except:
            []   

@csrf_exempt
def gets3_subject_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
            if request.method == 'POST':
                
                arr = []
                user_full_names = ""
                s3_subject_links = senior_three_video_links.objects.filter(senior_three=int(request.POST.get('subject_id'))).exclude(deleted=True).order_by('title')
                
                
                if 'pattern' in request.POST.keys():
                    pattern=request.POST['pattern']
                    s3_subject_links=s3_subject_links.filter(Q(title__icontains=pattern) | Q(description__icontains=pattern)).order_by('title')
                
                      
                for x in s3_subject_links:
                    
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
def editsubject_s1(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}

                n_subject = senior_one_subjects.objects.get(id=request.POST.get("pk"))
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
def editsubject_s2(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}

                n_subject = senior_two_subjects.objects.get(id=request.POST.get("pk"))
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
def editsubject_s3(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}

                n_subject = senior_three_subjects.objects.get(id=request.POST.get("pk"))
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
def editsubject_s1_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}
                

                video_link = senior_one_video_links.objects.get(id=request.POST.get("pk"))
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
def editsubject_s2_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}

                video_link = senior_two_video_links.objects.get(id=request.POST.get("pk"))
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
def editsubject_s3_links(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        try:
        
            if request.method == 'POST':
                
                json_r = {}

                video_link = senior_three_video_links.objects.get(id=request.POST.get("pk"))
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
            
            if(request.POST.get("class_c")=="S1"):
                n_subject = senior_one_subjects.objects.get(id=request.POST.get("pk"))
                n_subject.deleted=True
                n_subject.save()
            
            if(request.POST.get("class_c")=="S2"):
                n_subject = senior_two_subjects.objects.get(id=request.POST.get("pk"))
                n_subject.deleted=True
                n_subject.save()
                
            if(request.POST.get("class_c")=="S3"):
                n_subject = senior_three_subjects.objects.get(id=request.POST.get("pk"))
                n_subject.deleted=True
                n_subject.save()
                
            response = json.dumps('Successfully')  
            return HttpResponse(response)
        
        
@csrf_exempt
def delsubjectlink(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        if request.method == 'POST':
            
            if(request.POST.get("class_c")=="S1"):
                n_subject_l = senior_one_video_links.objects.get(id=request.POST.get("pk"))
                n_subject_l.deleted=True
                n_subject_l.save()
            
            if(request.POST.get("class_c")=="S2"):
                n_subject_l = senior_two_video_links.objects.get(id=request.POST.get("pk"))
                n_subject_l.deleted=True
                n_subject_l.save()
                
            if(request.POST.get("class_c")=="S3"):
                n_subject_l = senior_three_video_links.objects.get(id=request.POST.get("pk"))
                n_subject_l.deleted=True
                n_subject_l.save()
                
            response = json.dumps('Successfully')  
            return HttpResponse(response)
        
        
        
        
        
        
        
        