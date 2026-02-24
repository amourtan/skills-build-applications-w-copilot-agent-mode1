from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelSmokeTest(TestCase):
    def test_user_creation(self):
        User.objects.create(name='Test User', email='test@example.com', team='Marvel')
        self.assertEqual(User.objects.count(), 1)
    def test_team_creation(self):
        Team.objects.create(name='Test Team', description='A test team')
        self.assertEqual(Team.objects.count(), 1)
    def test_activity_creation(self):
        Activity.objects.create(user='Test User', activity='Running', duration=10)
        self.assertEqual(Activity.objects.count(), 1)
    def test_workout_creation(self):
        Workout.objects.create(user='Test User', workout='Push-ups', reps=20)
        self.assertEqual(Workout.objects.count(), 1)
    def test_leaderboard_creation(self):
        Leaderboard.objects.create(user='Test User', points=50)
        self.assertEqual(Leaderboard.objects.count(), 1)
