from django.shortcuts import render, get_object_or_404
from rest_framework import generics

from . import models
from . import serializers

class ListTodo(generics.ListCreateAPIView):
    queryset            = models.Todo.objects.all()
    serializer_class    = serializers.TodoSerializer

class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset            = models.Todo.objects.all()
    serializer_class    = serializers.TodoSerializer
