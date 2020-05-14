from django.conf.urls import patterns
from alevel.views import *
urlpatterns = patterns(
                       
                       'alevel.views',
                       (r'^addsubjectfour$', addsubject_s4),
                       (r'^gets4subjects$', gets4_subjects),
                       (r'^adds4subjectlink$', addsubject_s4_links),
                       (r'^gets4subjectlinks$', gets4_subject_links),
                       (r'^addsubjectfive$', addsubject_s5),
                       (r'^gets5subjects$', gets5_subjects),
                       (r'^adds5subjectlink$', addsubject_s5_links),
                       (r'^gets5subjectlinks$', gets5_subject_links),
                       (r'^addsubjectsix$', addsubject_s6),
                       (r'^gets6subjects$', gets6_subjects),
                       (r'^adds6subjectlink$', addsubject_s6_links),
                       (r'^gets6subjectlinks$', gets6_subject_links),
                       (r'^editsubjectfour$', editsubject_s4),
                       (r'^editsubjectfive$', editsubject_s5),
                       (r'^editsubjectsix$', editsubject_s6),
                       (r'^edits4subjectlink$', editsubject_s4_links),
                       (r'^edits6subjectlink$', editsubject_s6_links),
                       (r'^deletesubject$', delsubject),
                       (r'^deletesubjectlink$', delsubjectlink)
                       

)