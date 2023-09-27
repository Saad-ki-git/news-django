# Generated by Django 4.2.5 on 2023-09-12 12:18

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('author', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.CharField(max_length=225, unique=True)),
                ('title', models.CharField(max_length=225)),
                ('text', models.TextField(max_length=225)),
                ('photo1', models.ImageField(blank=True, upload_to='photo/%Y/%m/%d')),
                ('photo2', models.ImageField(blank=True, upload_to='photo/%Y/%m/%d')),
                ('photo3', models.ImageField(blank=True, upload_to='photo/%Y/%m/%d')),
                ('photo4', models.ImageField(blank=True, upload_to='photo/%Y/%m/%d')),
                ('is_published', models.BooleanField(default=django.utils.timezone.now)),
                ('list_date', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='author.authors')),
            ],
        ),
    ]
