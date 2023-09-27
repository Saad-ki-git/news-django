from django.db import models
from datetime import datetime

class Authors(models.Model):
    name = models.CharField(max_length=225)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    description = models.TextField(blank=True)
    phone = models.CharField(max_length=225)
    email = models.CharField(max_length=225)
    top_author= models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=datetime.now,blank=True)

    def __str__(self):
        return self.name