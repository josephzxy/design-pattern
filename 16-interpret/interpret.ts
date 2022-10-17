interface Expression {
  interpret(): boolean;
}

class TerminalExpr implements Expression {
  private literal: string;

  constructor(literal: string) {
      this.literal = literal;
  }

  interpret(): boolean {
      console.log(`interpreting ${this.literal}`);
      return true;
  }
}

class AndExpr implements Expression {
  private expr1: Expression;
  private expr2: Expression;

  constructor(expr1: Expression, expr2: Expression) {
      this.expr1 = expr1;
      this.expr2 = expr2;
  }

  interpret(): boolean {
      return this.expr1.interpret() && this.expr2.interpret();
  }
}

const t1 = new TerminalExpr('A');
const t2 = new TerminalExpr('B');
const t3 = new TerminalExpr('C');

const alter = new AndExpr(t1, t2);
const intptr = new AndExpr(alter, t3);

intptr.interpret();

/*
interpreting A
interpreting B
interpreting C
*/