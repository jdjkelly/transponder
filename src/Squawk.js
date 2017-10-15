import React, { Component } from 'react';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';

class Squawk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      submitted: false,
      showNotice: false,
      tooLong: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleChange(event) {
    const tooLong = event.target.value.length > 70;
    this.setState({value: event.target.value, tooLong});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.submitted || this.state.tooLong) return;

    this.setState({submitted: true});

    this.props.web3.eth.getAccounts((err, accounts) => {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accounts.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      var account = accounts[0];

      var transponder;
      this.props.contract.deployed().then((instance) => {
        transponder = instance;
        return transponder.squawk(this.state.value, { from: account });
      }).then(() => {
        this.setState({submitted: false, value: '', showNotice: true});
        console.log("Transaction complete!");
      })

    });
  }

  handleRequestClose(event) {
    this.setState({ showNotice: false });
  }

  render() {
    return (
      <Paper zDepth={1} style={{ margin: '1em', padding: '1em' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Speak your mind"
            errorText={ this.state.tooLong ? "Too long!" : false }
            fullWidth={true}
          />      
          <RaisedButton type="submit" label="Squawk 🐦" secondary={true} disabled={this.state.tooLong} fullWidth={true} />
        </form>
        <Snackbar
          open={this.state.showNotice}
          message="Squawk successful"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </Paper>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    contract: state.contract,
    web3: state.web3.web3Instance
  }
}

export default connect(mapStateToProps, {})(Squawk);

