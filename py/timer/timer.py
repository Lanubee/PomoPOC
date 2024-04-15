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
        self.time_paused = 0
        self.paused = False
        self.pause_pointer = -1

    def seconds_left(self):
        """Returns seconds left on timer.

        Returns:
            _type_: (int): Seconds left on timer
        """
        if self.paused:
            return self.duration
        
        return self.goal_time - time.time()     

    def pause_timer(self):
        """Pauses timer
        """
        self.duration = self.seconds_left()
        self.pause_pointer = time.time()
        self.paused = True

        #TODO: Pause the timer display variable
    
    def unpause_timer(self):
        """Unpauses timer, sets new goal_time and stores time elapsed while paused
        """
        self.goal_time = time.time() + self.duration
        self.time_paused = time.time() - self.pause_pointer
        self.paused = False

        #TODO: Unpause timer display variable



