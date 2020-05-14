from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class senior_four_subjects(models.Model): 
    subject = models.CharField(max_length=1000)
    notes = models.CharField(max_length=500, null=True) 
    registered_on=models.DateTimeField(auto_now_add=True)  
    registered_by = models.ForeignKey(User)
    deleted=models.BooleanField(default=False)
    
    def __str__(self):
        return self.subject
    
class senior_five_subjects(models.Model): 
    subject = models.CharField(max_length=1000)
    notes = models.CharField(max_length=500, null=True) 
    registered_on=models.DateTimeField(auto_now_add=True)  
    registered_by = models.ForeignKey(User)
    deleted=models.BooleanField(default=False)
    
    def __str__(self):
        return self.subject
    
class senior_six_subjects(models.Model): 
    subject = models.CharField(max_length=1000)
    notes = models.CharField(max_length=500, null=True) 
    registered_on=models.DateTimeField(auto_now_add=True)  
    registered_by = models.ForeignKey(User)
    deleted=models.BooleanField(default=False)
    
    def __str__(self):
        return self.subject
    
class senior_four_video_links(models.Model):
    title = models.CharField(max_length=1000)
    description = models.CharField(max_length=500, null=True) 
    registered_on=models.DateTimeField(auto_now_add=True)  
    registered_by = models.ForeignKey(User)
    link = models.URLField(max_length=200) 
    senior_four = models.ForeignKey(senior_four_subjects)
    deleted=models.BooleanField(default=False)
    
    def __str__(self):
        return self.title   
    
class senior_five_video_links(models.Model): 
    title = models.CharField(max_length=1000)
    description = models.CharField(max_length=500, null=True) 
    registered_on=models.DateTimeField(auto_now_add=True)  
    registered_by = models.ForeignKey(User)
    link = models.URLField(max_length=200)
    senior_five = models.ForeignKey(senior_five_subjects)
    deleted=models.BooleanField(default=False)
    
    def __str__(self):
        return self.title   

class senior_six_video_links(models.Model): 
    title = models.CharField(max_length=1000)
    description = models.CharField(max_length=500, null=True) 
    registered_on=models.DateTimeField(auto_now_add=True)  
    registered_by = models.ForeignKey(User)
    link = models.URLField(max_length=200)
    senior_six = models.ForeignKey(senior_six_subjects)
    deleted=models.BooleanField(default=False)
    
    def __str__(self):
        return self.title   