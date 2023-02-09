---
sidebar_position: 2
---

Des opérateurs RxJS personnalisés, qui rajoutent ou combinent des opérateurs existants.

### ofDelay

Une combinaison des opérateurs rxjs `delay` and `of`.
L'opérateur retourne la valeur passée en paramêtre après un temps définit (millisecondes).

Cela peux s'avérer utile lors de l'utilisation de mocks oû l'on souhaite simuler un delai de chargement.

```ts title="./user.service.mock.ts"
import { ofDelay } from 'ngx-veone';
import { faker } from '@faker-js/faker';
import { User } from '@shared/models/auth.models';

export const USER_MOCK: User = {
  id: faker.random.alphaNumeric(),
  username: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
};

@Injectable()
export class UserMockService extends UserService {
  override logUser(...args: unknown) {
    return ofDelay(USER_MOCK, 3000);
  }
}
```
