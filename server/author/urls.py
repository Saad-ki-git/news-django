
from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
   path("",views.AuthorListView.as_view()),
   path("topauthor",views.TopAuthorsView.as_view()),
#    get single author
   path("<pk>",views.AuthorListView.as_view()),

]
