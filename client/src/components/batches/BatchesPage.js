import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import BatchesList from './BatchesList'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {createBatch} from '../../actions/batches'
//import Typography from 'material-ui/Typography'




class BatchesPage extends PureComponent {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createBatch(this.state)   
    }

	handleChange = (event) => {
        const {name, value} = event.target

		this.setState({
          [name]: value
		})
    }


    render() {
        const initialValues = this.props.initialValues || {}

        return(
            <Paper className="outer-paper">
               <form onSubmit={this.handleSubmit}>
                    <TextField
                        id='batch'
                        label='Batch Number'
                        name='batchNumber'
                        value={this.state.batchNumber || initialValues.batchNumber || ''}
                        onChange={this.handleChange}
                        />
                    <TextField
                        id='startdate'
                        label='Start Date'
                        name='startDate'
                        value={this.state.startDate || initialValues.startDate || ''}
                        onChange={this.handleChange}
                        />    
                    <TextField
                        id='enddate'
                        label='End Date'
                        name='endDate'
                        value={this.state.endDate || initialValues.endDate || ''}
                        onChange={this.handleChange}
                        />   
                            <Button
                                type='submit'
                                color="secondary"
                                variant="raised"
                                className="create-batch"
                                >
                                Create Batch
                            </Button>
                </form>

                <BatchesList/>

            </Paper>  
        )
    }
}

const mapStateToProps = function (state) {
	return {
        batches: state.batches,
	}
}

export default connect(mapStateToProps, {createBatch}) (BatchesPage);