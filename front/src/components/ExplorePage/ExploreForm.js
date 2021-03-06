import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const ExploreForm = ({
  handleChangeFirstOption,
  handleChangeSecondOption,
  state
}) => {
  return (
    <>
      <FormGroup>
        <Label for="exampleSelect" className="mt-4 search">
          I want to :
        </Label>
        <Input
          type="select"
          name="select"
          id="exampleSelect"
          onChange={event => handleChangeFirstOption(event.target.value)}
        >
          <option hidden>...</option>
          {state.firstOptions &&
            state.firstOptions.map(firstOption => {
              return <option key={firstOption.id}>{firstOption.value}</option>;
            })}
        </Input>
      </FormGroup>

      {state.showSecondOption && (
        <FormGroup>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={event => handleChangeSecondOption(event.target.value)}
          >
            <option hidden>...</option>
            {state.secondOptions &&
              state.secondOptions
                .filter(
                  secondOption =>
                    secondOption.firstOptionId === state.currentFirstOption.id
                )
                .map(secondOption => {
                  return (
                    <option key={secondOption.id}>{secondOption.value}</option>
                  );
                })}
          </Input>
        </FormGroup>
      )}
    </>
  );
};

export default ExploreForm;
