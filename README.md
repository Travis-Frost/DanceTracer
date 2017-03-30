The project that I envision is well beyond my capabilities at the moment, however, this is a good starting point and the following is still a solid representation of what I intend to create.  With out the back end programing knowledge I cut the project's scope to be a basic javascript list that allows a user to input, edit, delete, and move dancers from available to unavailable.  

To view the live semi-end product goto https://travis-frost.github.io/DanceTracker/

The list currently does not save once you leave the page.  Again, that will be something I address in the backend side of things.  There are also several other issues, but I'm going to tackle those at a later date as I am out of time.  That, and I have more creativity than I have skill.  

# DanceTracer
Entertainer Tracking System

Purpose: This project is an attempt to create a tracking system for tracking and creating an end of night report for:
          1) A list of entertainers
          2) Tracking the number of private dances each entertainer performed
          3) Tracking the number and duration of VIP Suites sold by each entertainer
          4) Producing an end of night report that should:
            A) Calculate what is owed to the club by each entertainer (rent + (# of Dances * $5))
            B) Calculate # of Wrist Bands sold and $ amount corresponding to (# sold * $5)
            C) Show VIP Suites sold list "Entertainer Name", "Time" (make auto) but have editable field, "Duration", "Suite Cost", and "$ to Club" in that order
            D) This report will be created in a printable format.  
            E) More will likely be added.
          5) There will be multiple views (tabs??):
            Initial development will likely be only for the tracker view  
            A) DJ - this view will allow for
              1) Adding and removing entertainers to the dance list
              2) Show if a dance is in a VIP Suite
              3) Future possibility of showing Private Dance status, but not at the moment
              4) Future integration of Spotify
            B) Tracker
              1) Adding and removing entertainers to the dance list
              2) Adding and removing entertainers VIP Suites sold (button alone)
                a) Ask for a "Entertainer Name", "Time" (Make Auto, pull from device)
                b) Ask for a "Duration"
                c) Send info to report
                d) Add timer to Dance List
            C) Director
              1) Will develop more later
            D) Reports
              1) List Entertainers, each entertainer will have the following:
                a) Entertainer Name
                b) Rent - clock in day/time
                c) # of Dances
                d) $ amount owed to club by Rent, Dance total, and combination of the two
              2) Will include Wrist Band totals also

Initial Development is going to concentrate on creating a dance list with the ability to:
  1) Add and remove entertainers
  2) Add and remove VIP Suites per Entertainer
  3) Make the VIP Suite timer visually que that:
    a) "Entertainer Name" is in a VIP Suite
    b) Time left in VIP Suite
    c) Notify (not sure how) that the VIP Suite duration is ended        
