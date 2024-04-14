import unittest
from timer.timer import Timer

class TestTimer(unittest.TestCase):

    def setUp(self):
        self.timer = Timer(5)

    def test_set_time(self):
        self.assertEqual(self.timer.goal_time, (self.timer.initial_time + 5))
        
    #def test_seconds_left():