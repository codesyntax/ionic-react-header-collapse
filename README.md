# ionic-react-header-collapse

### Easy to use hook to handle collapse effect on scroll for IonHeader component in React Ionic

> Currently the package is in beta phase. Any issue or PR will be appreciated ;)

[![NPM](https://img.shields.io/npm/v/@codesyntax/ionic-react-header-collapse.svg)](https://www.npmjs.com/package/@codesyntax/ionic-react-header-collapse) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


IOS/Android:

<img src="./example/ios_demo.gif" width="25%">
<img src="./example/android_demo.gif" width="25%">


## Install

```bash
npm install --save @codesyntax/ionic-react-header-collapse
```

## Usage

```tsx
import React, { Component } from 'react';

import { UseIonHeaderCollapse, useIonHeaderCollapse } from '@codesyntax/ionic-react-header-collapse';

const Home: React.FC = () => {
  const { ref } = useIonHeaderCollapse({} as UseIonHeaderCollapse);
  render() {
    return (
      <IonPage>
        <IonHeader ref={ref}>
          <IonToolbar>
            <IonTitle>Ionic header</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          ...
        </IonContent>
      </IonPage>
      );
  }
}
```


## License

MIT © [CodeSyntax](https://github.com/codesyntax)
