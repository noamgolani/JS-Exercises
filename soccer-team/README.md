# Soccer Team

## [Person JS](./Person.js), [Player JS](./Player.js), [Goal Keeper JS](./GoalKeepr.js)

```
	to start easly:
	-	npm i
	-	npm nodemon index.js
```

## Assignment

Congratulations, you are the owner of the F.C Cyber4s football team. It's time to sign players.

1. Create a class that represents a Person.

Should have the following properties:

- firstName
- sureName
- salary
- age
- id (private property)

Should have constructor + getters and setters that makes sense (a person wont change his name).

Extend Person and create 2 sub-classes:

### Player inherits from Person

Player should have additional properties:

- strongLeg
- position
- celebrationSentence

Should have constructor and the following methods:

- goalClebration(). The player's celebration sentence will be printed and his salary will increase by 2.5 percent.
- getters and setters that makes sense (a player may change his celebration sentence).

### GoalKeepr inherits from Person

GoalKeepr should have additional properties:

- isLeftHanded
- lastGoalConceded (defaults to this moment)

Should have constructor and the following methods:

- concededAGoal(). The lastGoalConceded property will be updated to this moment and his salary will decreased by 2.5 percent
- getters and setters that makes sense (a goalKeepr's strong hand wont change).
