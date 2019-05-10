import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: '',
      twenties: '0',
      tens: '0',
      fives: '0',
      ones: '0',
      quarters: '0',
      dimes: '0',
      nickels: '0',
      pennies: '0',
    };
    // for updating state value
    this.handleAmountDue = this.handleAmountDue.bind(this);
    this.handleAmountReceived = this.handleAmountReceived.bind(this);
    // for making calculation
    this.calculateChange = this.calculateChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleAmountDue(event) {
    this.setState({ amountDue: event.target.value });
  }

  handleAmountReceived(event) {
    this.setState({ amountReceived: event.target.value });
  }

  calculateChange(amountDue, amountReceived) {
    // dollar bills
    const changeDue = (amountReceived - amountDue).toFixed(2);
    const dollars = Math.trunc(changeDue);
    const twenties = Math.floor(dollars / 20);
    const tens = Math.floor((dollars % 20) / 10);
    const fives = Math.floor(((dollars % 20) % 10) / 5);
    const ones = Math.floor((dollars % 20) % 10) % 5;
    // coins
    const centsConverted = Math.round(changeDue * 100);
    const cents = Number((centsConverted.toString().slice(-2)));
    const quarters = Math.floor(cents / 25);
    const dimes = Math.floor((cents % 25) / 10);
    const nickels = Math.floor(((cents % 25) % 10) / 5);
    const pennies = Math.floor(((cents) % 25) % 10) % 5;

    // this should give the specific change amount after calculation
    this.setState({
      changeDue: 'total change due is $' + changeDue,
      twenties,
      tens,
      fives,
      ones,
      quarters,
      dimes,
      nickels,
      pennies,
    });
  }

  handleClick(event) {
    event.preventDefault();

    const amountDue = this.state.amountDue;
    const amountReceived = this.state.amountReceived;

    this.calculateChange(amountDue, amountReceived);
  }

  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1 className='text-white'>Change Calculator</h1>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Enter Information Here</div>
              <div className='panel-body'>
                <div className='form-group'>
                  <label htmlFor='amountDue'>How Much Is Due?</label>
                  <input name='amountDue' onChange={ this.handleAmountDue } value={ this.state.amountDue } className='form-control input-md' />
                </div>
                <div className='form-group'>
                  <label htmlFor='amountReceived'>How Much Was Received?</label>
                  <input name='amountReceived' onChange={ this.handleAmountReceived } value={ this.state.amountReceived } className='form-control input-md' />
                </div>
                <div className='panel-footer'>
                  <button name='button' onClick={ this.handleClick } className='btn btn-primary form-control'>CALCULATE CHANGE</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8 results-wrapper'>
            <div className='panel panel-default'>
              <div className='panel-body'>
                <div className='alert alert-success'>
                  {this.state.changeDue}
                </div>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h1>Twenties</h1>
                        <p name='change'>{this.state.twenties}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h1>Tens</h1>
                        <p name='change'>{this.state.tens}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h1>Fives</h1>
                        <p name='change'>{this.state.fives}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h1>Ones</h1>
                        <p name='change'>{this.state.ones}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h1>Quarters</h1>
                        <p name='change'>{this.state.quarters}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h1>Dimes</h1>
                        <p name='change'>{this.state.dimes}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h1>Nickels</h1>
                        <p name='change'>{this.state.nickels}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h1>Pennies</h1>
                        <p name='change'>{this.state.pennies}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
