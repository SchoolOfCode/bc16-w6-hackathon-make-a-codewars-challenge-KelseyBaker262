Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

# Build my own Codewars

OVERALL TASK:

1. Clearly describing a problem/task that you want others to solve
2. Write unit tests to check whether their solution to your task is correct
3. Present your project plan, story, and anything else you feel supports your creation process and final outcome in a document

4. Planning:
   Idea:✅
   Too many animals registered at the vets so those who haven't had an appointment in 3 years are unregistered

- Disney Ideation✅
- Create challenge and story (provide additional details or examples so someone understand the problem)✅
- Break it down: goals of challenege, the scenarios I could provide to test if people have reached the goals ✅
- MVPs ✅

2. Writing tests

- Consider the inputs that will go in the solution function ✅
- Encorporate Equivalency Partitioning, Boundary Value Analysis, and Decision Tables✅
- Create tests which fully cover the expected functionality
- Use TDD and AAA✅

3. Verify my tests by adding a function which passes the tests✅

4. Remove working solution, share kata repo and add the description

5. Create a markdown file (plans, final result, feedback, challenges, what went well)

![alt text](<Screenshot 2024-03-14 232126.png>) DISNEY IDEATION

BREAK IT DOWN:

Consider inputs that go into solution function

- Create a variable with todays date
- Accessing an array
- Iterating through the array
- Comparing dates
- Returning a string with the the specific pet name

TEST SCENARIOS:

- Consider the inputs that will go in the solution function✅
- Encorporate Equivalency Partitioning, Boundary Value Analysis, and Decision Tables✅

Equivalency Partitioning:

| Input Field | Valid Equivalence Classes | Invalid Equivalence Classes |
| ----------- | ------------------------- | --------------------------- |
| visitDates  | Date > 2021-03-15         | Date < 2021-03-15           |

Identify Boundary Values:

| Boundary Values |
| --------------- |
| 2021-03-14      |
| 2021-03-16      |
|                 |
| Todays date     |
| Tomorrows date  |
|                 |
|                 |
| Non-numeric     |

Design Test Cases:

| Test Case | Input Value    | Expected Result                                                                            |
| --------- | -------------- | ------------------------------------------------------------------------------------------ |
| TC5       | non-numeric    | Error message                                                                              |
| TC1       | 2021-03-14     | Valid, displays pet name has not visited in 3 years and needs to be taken off the register |
| TC2       | 2021-03-16     | Invalid, shouldn't be displayed in returned string                                         |
| TC4       | Tomorrows date | Error message                                                                              |
| TC3       | Todays date    | Invalid, shouldn't be displayed in returned string                                         |

Decision Table:

| Conditions           | Test Case 1 | Test Case 2 | Test Case 3 | Test Case 4    | Test Case 5 |
| -------------------- | ----------- | ----------- | ----------- | -------------- | ----------- |
| Pet                  | Pet         | Pet         | Pet         | Pet            | Pet         |
| Last visit date      | non-numeric | 2021-03-14  | 2021-03-16  | Tomorrows date | Todays date |
| Remove from register | ✗           | ✓           | ✗           | ✗              | ✗           |
| Keep registered      | ✗           | ✗           | ✓           | ✗              | ✓           |
| Error                | ✓           | ✗           | ✗           | ✓              | ✗           |

MVPs:

MVP 1: ✅

- Ensure all files are set up correctly
- Create a basic test that will fail
- Create a basic function that will pass
  (Comparing todays date and one more than 3 years ago, 2021-03-14)

MVP 2: ✅

- Create a basic test that will pass
- Create a basic function that will pass
  (Comparing todays date and one less than 3 years ago,2021-03-16)

MVP 3:

- Create a test that will fail dates in the future

MVP 4:

- Create a test that will pass with todays date as it is not more than 3 years ago

MVP 5:
-Create a test that will fail a non-numeric date

REFLECTIONS: final result, feedback,

Challenges:

- I reminded myself in my planning to not over complicate things but I did over complicate by encorporating todays date

- In my function I was console logging the pet which needed to be identified but then when I realised that I needed to change console log to return, I was only able to return the first pet instead of all that visted 3 years ago so I had to refactor my plan and story as I didn't have enough time to change it

Things I would do differntly nect time:

- Change my story and function to be able to return all pets who visited over 3 years ago instead of the first one

What went well:

- I'm happy with my level of planning

- I have been able to achieve MVPs and get functioning tests
