# Generated by Django 4.2.5 on 2023-09-19 13:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0002_alter_listing_text'),
    ]

    operations = [
        migrations.RenameField(
            model_name='listing',
            old_name='list_date',
            new_name='created_at',
        ),
    ]
