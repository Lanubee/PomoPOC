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
        
    def test_pause_timer(self):
        self.timer.pause_timer()
        time.sleep(1)
        self.assertEqual(self.timer.seconds_left(), 5)
    
    def test_unpause_timer(self):
        self.timer.pause_timer()
        time.sleep(1)
        self.timer.unpause_timer()
        time.sleep(1)
        self.assertTrue(self.timer.seconds_left() < 4 and self.timer.seconds_left() > 3)