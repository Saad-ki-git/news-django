from django.db import models
from django.utils.timezone import now
from author.models import Authors


class Listing(models.Model):
    # one to many relations | one author with many blogs
    author =  models.ForeignKey(Authors,on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=225,unique=True)
    title = models.CharField(max_length=225)
    desc = models.TextField(blank=False)
    detail_desc = models.TextField(blank=False,default=None)
    photo = models.ImageField(upload_to="post_images",default=None)
    is_published = models.BooleanField(default=now)
    created_at = models.DateTimeField(default=now,blank=True)
    
    def __str__(self):
        return self.title
    @property
    def author_name(self):
        return self.author.name