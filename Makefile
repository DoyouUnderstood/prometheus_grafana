DC=docker-compose

up:
	$(DC) up

down:
	$(DC) down

logs:
	$(DC) logs -f

