from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class senior_one_subjects(models.Model): 
    subject = models.CharField(max_length=1000)
    notes = models.CharField(max_length=500, null=True) 
    registered_on=models.DateTimeField(auto_now_add=True)  
    registered_by = models.ForeignKey(User)
    deleted=models.BooleanField(default=False)
    
    def __str__(self):
        return self.subject
    
class senior_two_subjects(models.Model): 
    subject = models.CharField(max_length=1000)
    notes = models.CharField(max_length=500, null=True) 
    registered_on=models.DateTimeField(auto_now_add=True)  
    registered_by = models.ForeignKey(User)
    deleted=models.BooleanField(default=False)
    
    def __str__(self):
        return self.subject
    
class senior_three_subjects(models.Model): 
    subject = models.CharField(max_length=1000)
    notes = models.CharField(max_length=500, null=True) 
    registered_on=models.DateTimeField(auto_now_add=True)  
    registered_by = models.ForeignKey(User)
    deleted=models.BooleanField(default=False)
    
    def __str__(self):
        return self.subject
    
class senior_one_video_links(models.Model): 
    title = models.CharField(max_length=1000)
    description = models.CharField(max_length=500, null=True) 
    registered_on=models.DateTimeField(auto_now_add=True)  
    registered_by = models.ForeignKey(User)
    link = models.URLField(max_length=200)
    senior_one = models.ForeignKey(senior_one_subjects)
    deleted=models.BooleanField(default=False)
    
    def __str__(self):
        return self.title   
    
class senior_two_video_links(models.Model): 
    title = models.CharField(max_length=1000)
    description = models.CharField(max_length=500, null=True) 
    registered_on=models.DateTimeField(auto_now_add=True)  
    registered_by = models.ForeignKey(User)
    link = models.URLField(max_length=200)
    senior_two = models.ForeignKey(senior_two_subjects)
    deleted=models.BooleanField(default=False)
    
    def __str__(self):
        return self.title  
    
class senior_three_video_links(models.Model): 
    title = models.CharField(max_length=1000)
    description = models.CharField(max_length=500, null=True) 
    registered_on=models.DateTimeField(auto_now_add=True)  
    registered_by = models.ForeignKey(User)
    link = models.URLField(max_length=200)
    senior_three = models.ForeignKey(senior_three_subjects)
    deleted=models.BooleanField(default=False)
    
    def __str__(self):
        return self.title    