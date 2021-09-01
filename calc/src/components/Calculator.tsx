import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Calc, { CalcInput, InputType, OperatorType } from "../modules/calc";
import Button, { ButtonType } from "./Button";

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: 120px repeat(5, 80px);
`;

const Display = styled.div`
  background: #fff;
  border-radius: 8px;
  grid-column-end: span 4;
  font-size: 48px;
  padding: 32px 24px;
  text-align: right;
`;

const Calculator: React.FC<{}> = () => {
  const [inputs, setInputs] = useState<Array<CalcInput>>([]);
  const state = Calc.getState(inputs);

  const appendInput = (input: CalcInput): void => {
    setInputs((prev) => [...prev, input]);
  };
  const handleOperator = (operator: OperatorType) => () => {
    appendInput({ type: InputType.Operator, operator });
  };

  const handleNumerical = (value: number) => () => {
    appendInput({ type: InputType.Numerical, value });
  };
  return (
    <Container>
      <Grid>
        <Display>{state.displayValue}</Display>
        <Button label="AC" position={[0, 1]} width={2} />
        <Button label="Oops" position={[2, 1]} width={2} />

        <Button
          label="-"
          position={[3, 2]}
          onClick={handleOperator(OperatorType.Subtract)}
        />
        <Button
          label="+"
          position={[3, 3]}
          onClick={handleOperator(OperatorType.Add)}
        />
        <Button
          label="="
          position={[3, 4]}
          height={2}
          onClick={handleOperator(OperatorType.Equals)}
        />

        <Button
          label="9"
          buttonType={ButtonType.Number}
          position={[2, 2]}
          onClick={handleNumerical(9)}
        />
        <Button
          label="8"
          buttonType={ButtonType.Number}
          position={[1, 2]}
          onClick={handleNumerical(8)}
        />
        <Button
          label="7"
          buttonType={ButtonType.Number}
          position={[0, 2]}
          onClick={handleNumerical(7)}
        />
        <Button
          label="6"
          buttonType={ButtonType.Number}
          position={[2, 3]}
          onClick={handleNumerical(6)}
        />
        <Button
          label="5"
          buttonType={ButtonType.Number}
          position={[1, 3]}
          onClick={handleNumerical(5)}
        />
        <Button
          label="4"
          buttonType={ButtonType.Number}
          position={[0, 3]}
          onClick={handleNumerical(4)}
        />
        <Button
          label="3"
          buttonType={ButtonType.Number}
          position={[2, 4]}
          onClick={handleNumerical(3)}
        />
        <Button
          label="2"
          buttonType={ButtonType.Number}
          position={[1, 4]}
          onClick={handleNumerical(2)}
        />
        <Button
          label="1"
          buttonType={ButtonType.Number}
          position={[0, 4]}
          onClick={handleNumerical(1)}
        />
        <Button
          label="0"
          buttonType={ButtonType.Number}
          position={[0, 5]}
          width={3}
        />
      </Grid>
    </Container>
  );
};

export default Calculator;
