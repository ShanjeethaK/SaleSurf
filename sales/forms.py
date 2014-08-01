from django import forms
from django.contrib.auth.forms import UserCreationForm
from sales.models import UserProfile

__author__ = 'shanjee'


class UserProfileForm(UserCreationForm):
    # Just to reiterate, if you use a DateField in your UserProfile model for birthday
    # you can remove all of this code
    month = [('January', 'January'), ('February', 'February'), ('March', 'March'), ('April', 'April'), ('May', 'May'), ('June', 'June'), ('July','July'), ('August', 'August'), ('September', 'September'), ('October', 'October'), ('November', 'November'), ('December', 'December')]

    day = []

    for num in range(1, 32):
        day.append( (num, num) )

    year = []

    for num in range(1914, 2015):
        year.append( (num, num) )

    user_birthday_month = forms.ChoiceField(choices=month, required=True)
    user_birthday_day = forms.ChoiceField(choices=day, required=True)
    user_birthday_year = forms.ChoiceField(choices=year, required=True)
    email = forms.EmailField(required=True)

    class Meta:
        model = UserProfile
        fields = ('first_name', 'last_name', 'email', 'username', 'password1', 'password2')

    def clean_username(self):
        username = self.cleaned_data('username')
        try:
            UserProfile.objects.get(username=username)
        except UserProfile.DoesNotExist:
            return username
        raise forms.ValidationError(
            self.error_messages['duplicate_username'],
            code='duplicate_username',
        )
