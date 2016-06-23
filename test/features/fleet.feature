Feature: Try to get a fleet information

Scenario: Client send a request to API service
	Given a list of fleets
		| _id | fleetId | name  | isActive |
		| 1111 | 1111   | Hullo | true |
		| 2222 | 2222   | Hello | true |
	# When I send a request to API service, to get fleet with id 1111
	# Then I get a JSON object with id 1111