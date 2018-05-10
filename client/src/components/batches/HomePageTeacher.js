import React, {PureComponent} from 'react'
import {getBatches, createBatch} from '../../actions/batches'
import {getUsers} from '../../actions/teachers'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import CreateBatchButton from './CreateBatchButton'
import BatchesList from './BatchesList'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import './BatchList.css'

class HomePageTeacher extends PureComponent {


    render() {
        const {currentUser} = this.props

        return(
            <Paper className="outer-paper">
                { currentUser.teacher && <CreateBatchButton/>}

                <BatchesList/>
            </Paper>  
        )
    }
}

const mapStateToProps = function (state) {
    return {
      currentUser: state.currentUser
    }
  }

export default connect (mapStateToProps)(HomePageTeacher);