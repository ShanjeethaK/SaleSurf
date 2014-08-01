from django.shortcuts import render, redirect
from sales.forms import UserProfileForm
# Create your views here.

def home(request):
    return render(request, 'home.html')

# def home(request):
#     if request.method == 'POST':
#         form = UserProfileForm(request.POST)
#         if form.is_valid():
#             user = form.save()
#             return render(request, 'index.html')
#
#     else:
#         form = UserProfileForm()
#
#     return render(request, 'registration/register.html', {'form': form})

#
#
#
def register(request):
    if request.method == 'POST':
        form = UserProfileForm(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('home')
    else:
        form = UserProfileForm()

    return render(request, 'registration/register.html', {'form': form})


def search(request):
    return render(request, 'search.html')