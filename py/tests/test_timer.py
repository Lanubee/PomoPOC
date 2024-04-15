import unittest
import time
from timer.timer import Timer

class TestTimer(unittest.TestCase):

    def setUp(self):
        self.timer = Timer(5)

    def test_set_time(self):
        self.assertEqual(self.timer.goal_time, (self.timer.initial_time + 5))
        
    def test_seconds_left(self):
        time.sleep(1)
        self.assertTrue(self.timer.seconds_left() < self.timer.duration)
        