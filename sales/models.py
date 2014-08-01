from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class UserProfile(AbstractUser):
    month = [('January', 'January'), ('February', 'February'), ('March', 'March'), ('April', 'April'), ('May', 'May'), ('June', 'June'), ('July','July'), ('August', 'August'), ('September', 'September'), ('October', 'October'), ('November', 'November'), ('December', 'December')]

    day = []

    for num in range(1, 32):
        day.append( (num, num) )

    year = []

    for num in range(1914, 2015):
        year.append( (num, num) )

    user_birthday_month = models.CharField(max_length=10, choices=month, null=True)
    user_birthday_day = models.SmallIntegerField(max_length=2, choices=day, null=True)
    user_birthday_year = models.SmallIntegerField(max_length=4, choices=year, null=True)

    def __unicode__(self):
        return "{}, {} | {}".format(self.last_name, self.first_name, self.username)

class Item(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    sale_price = models.DecimalField(max_digits=5, decimal_places=2)
    currency = models.CharField(max_length=5)
    store_name =  models.CharField(max_length=50)
    store_givenUrl = models.URLField(null=True)
    store_url = models.URLField()
    item_img = models.URLField(null=True)


    def __unicode__(self):
        return "{} | {} - {}".format(self.store_name, self.category, self.name)

