/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface TypePrors {
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<TypePrors> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};