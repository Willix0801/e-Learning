from django.conf.urls import patterns
from olevel.views import *
urlpatterns = patterns(
                       
                       'olevel.views',
                       (r'^addsubjectone$', addsubject_s1),
                       (r'^gets1subjects$', gets1_subjects),
                       (r'^adds1subjectlink$', addsubject_s1_links),
                       (r'^gets1subjectlinks$', gets1_subject_links),
                       (r'^addsubjecttwo$', addsubject_s2),
                       (r'^gets2subjects$', gets2_subjects),
                       (r'^adds2subjectlink$', addsubject_s2_links),
                       (r'^gets2subjectlinks$', gets2_subject_links),
                       (r'^addsubjectthree$', addsubject_s3),
                       (r'^gets3subjects$', gets3_subjects),
                       (r'^adds3subjectlink$', addsubject_s3_links),
                       (r'^gets3subjectlinks$', gets3_subject_links),
                       (r'^editsubjectone$', editsubject_s1),
                       (r'^editsubjecttwo$', editsubject_s2),
                       (r'^editsubjectthree$', editsubject_s3),
                       (r'^edits1subjectlink$', editsubject_s1_links),
                       (r'^edits2subjectlink$', editsubject_s2_links),
                       (r'^edits3subjectlink$', editsubject_s3_links),
                       (r'^deletesubject$', delsubject),
                       (r'^deletesubjectlink$', delsubjectlink)
                       
                       

)