import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardHeader, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import CreateIcon from '@material-ui/icons/Create'
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline'
import './BatchesList.css'
import {getAllBatches} from '../../actions/batches'
import {Link} from 'react-router-dom'
import Typography from 'material-ui/Typography'

class BatchesList extends PureComponent {

    componentWillMount() {
        if (this.props.games === null) this.props.getAllBatches();
            //if(this.props.currentUser.userId) localStorage.getItem(userId)

        }

    
    

renderBatch = (batch) => {
        const currentUser = this.props.currentUser

    return (<Card key={batch.id} className="batch-card">
      <CardContent>
      <Typography variant="headline" component="h2">
            # BATCH{batch.batchTitle}
          </Typography>
          <Typography component="p">
            Start date: {batch.startDate}<br />
            End date: {batch.endDate}
          </Typography>
          </CardContent>
        <CardActions> 
            <Link to={`/batches/${batch.id}`}>
            <Button
                size="small"
                variant="raised"
                >
            
                TO BATCH
                <PlayCircleOutline/>
            </Button>
            </Link>
        </CardActions>
    </Card>
    )}

    render() {
        const {batches} = this.props
        console.log({batches})

        return(
            <div>
                {batches.map(batch => this.renderBatch(batch))}
            </div>
            
        )
    }
}

const mapStateToProps = function (state) {
	return {
        batches: state.batches ,
        currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {getAllBatches})(BatchesList)
