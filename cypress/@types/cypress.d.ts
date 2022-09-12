/// <reference path="cypress/types/jquery" />

namespace Cypress {
  interface Chainable {
    getByTestId<E extends Node = HTMLElement>(selector: string,
      wildcard?: string): Chainable<JQuery<E>>;
  }
}
