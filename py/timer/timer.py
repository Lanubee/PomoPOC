#import time module
import time

class Timer():
    """Class for a Timer object. Tracks the time through an
    initial time and a goal time.
    """
    
    def __init__(self, set_timer):
        """Constructor for Timer object.

        Args:
            set_timer (int): Time in seconds to add to timer
        """
        self.initial_time = time.time()
        self.goal_time = self.initial_time + set_timer
        self.duration = set_timer

    def seconds_left(self):
        """Returns seconds left on timer.

        Returns:
            _type_: (int): Seconds left on timer
        """
        return self.goal_time - time.time()        

