class test {
  name: string
  curren: string
  constructor(curren: string) {
    this.curren = curren
  }
}

const result = new test('第三')

function xf<T>(obj: T) {}
xf<InstanceType<typeof test>>({ curren: '123' })

console.log(result)

class tesxt {
  name: string
  constructor() {
    this.name = 'z'
  }
}

const ty: tesxt = new test('123')

console.log(ty)
