import { helper } from '@ember/component/helper';

export default helper(function indexIncrement([params]/*, hash*/) {
  return params + 1;
});
