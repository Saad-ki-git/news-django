from django.shortcuts import render
from rest_framework.generics import ListAPIView,RetrieveAPIView
from rest_framework import permissions
from .models import Authors
from rest_framework.permissions import AllowAny
from .serializers import AuthorSerializer
from .pagination import CustomPagination


# for multiple authors to show
class AuthorListView(ListAPIView):
    permission_classes = [AllowAny]
    queryset = Authors.objects.all()
    serializer_class = AuthorSerializer
    pagination_class = CustomPagination
    
    
# for a single author to show
class AuthorView(RetrieveAPIView):
    permission_classes = [AllowAny]
    queryset = Authors.objects.all()
    serializer_class = AuthorSerializer
    
#  for top authors
class TopAuthorsView(ListAPIView):
    permission_classes = [AllowAny]
    queryset = Authors.objects.all()
    serializer_class = AuthorSerializer
    pagination_class = CustomPagination