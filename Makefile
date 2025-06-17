install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

.PHONY: lint

lint:
	npx eslint . --ext .js,.ts || (echo "Ошибки найдены" && exit 1)
	@echo "Ошибок нет, всё отлично!"

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js
