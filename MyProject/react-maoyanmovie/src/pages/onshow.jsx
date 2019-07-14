import React, { Component } from 'react';
import Scroll from '../common/scroll/Scroll';
import Lazyload, { forceCheck } from 'react-lazyload';


class OnShow extends Component {
  state = { 
    refreshScroll:false
   }
  render() { 
    const { refreshScroll } = this.state
      return (  
        <div className="onshow">
          <Scroll refresh={refreshScroll}>
          <div className="movielist">
          <div>正在上映66</div>
          <div>正在上映</div>
          <div>正在上映88</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映889</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映11</div>
          <div>正在上映</div>
          <div>正在55上映</div>
          <div>正在上5映</div>
          <div>正在上映</div>
          <div>正在上映22</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映</div>
          <div>正在上映</div>
          <div>正在5上映45</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映33</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正2在上映</div>
          <div>正在上85映</div>
          <div>正在上映</div>
          <div>正在8上映</div>
          <div>正在上映</div>
          <div>正在5上映44</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上2映</div>
          <div>正在上映</div>
          <div>正在上映55</div>
          <div>正在上映66</div>
          <div>正在上映</div>
          <div>正在上映88</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映889</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映11</div>
          <div>正在上映</div>
          <div>正在55上映</div>
          <div>正在上5映</div>
          <div>正在上映</div>
          <div>正在上映22</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映</div>
          <div>正在上映</div>
          <div>正在5上映45</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映33</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正2在上映</div>
          <div>正在上85映</div>
          <div>正在上映</div>
          <div>正在8上映</div>
          <div>正在上映</div>
          <div>正在5上映44</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上2映</div>
          <div>正在上映</div>
          <div>正在上映55</div>
          <div>正在上映66</div>
          <div>正在上映</div>
          <div>正在上映88</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映889</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映11</div>
          <div>正在上映</div>
          <div>正在55上映</div>
          <div>正在上5映</div>
          <div>正在上映</div>
          <div>正在上映22</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映</div>
          <div>正在上映</div>
          <div>正在5上映45</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映33</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正2在上映</div>
          <div>正在上85映</div>
          <div>正在上映</div>
          <div>正在8上映</div>
          <div>正在上映</div>
          <div>正在5上映44</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上2映</div>
          <div>正在上映</div>
          <div>正在上映55</div>
          <div>正在上映66</div>
          <div>正在上映</div>
          <div>正在上映88</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映889</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映11</div>
          <div>正在上映</div>
          <div>正在55上映</div>
          <div>正在上5映</div>
          <div>正在上映</div>
          <div>正在上映22</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映</div>
          <div>正在上映</div>
          <div>正在5上映45</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映33</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正2在上映</div>
          <div>正在上85映</div>
          <div>正在上映</div>
          <div>正在8上映</div>
          <div>正在上映</div>
          <div>正在5上映44</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上2映</div>
          <div>正在上映</div>
          <div>正在上映55</div>
          <div>正在上映66</div>
          <div>正在上映</div>
          <div>正在上映88</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映889</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映11</div>
          <div>正在上映</div>
          <div>正在55上映</div>
          <div>正在上5映</div>
          <div>正在上映</div>
          <div>正在上映22</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映</div>
          <div>正在上映</div>
          <div>正在5上映45</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映33</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正2在上映</div>
          <div>正在上85映</div>
          <div>正在上映</div>
          <div>正在8上映</div>
          <div>正在上映</div>
          <div>正在5上映44</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上2映</div>
          <div>正在上映</div>
          <div>正在上映55</div>
          <div>正在上映66</div>
          <div>正在上映</div>
          <div>正在上映88</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映889</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映11</div>
          <div>正在上映</div>
          <div>正在55上映</div>
          <div>正在上5映</div>
          <div>正在上映</div>
          <div>正在上映22</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映</div>
          <div>正在上映</div>
          <div>正在5上映45</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映33</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正2在上映</div>
          <div>正在上85映</div>
          <div>正在上映</div>
          <div>正在8上映</div>
          <div>正在上映</div>
          <div>正在5上映44</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上2映</div>
          <div>正在上映</div>
          <div>正在上映55</div>
          <div>正在上映66</div>
          <div>正在上映</div>
          <div>正在上映88</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映889</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映11</div>
          <div>正在上映</div>
          <div>正在55上映</div>
          <div>正在上5映</div>
          <div>正在上映</div>
          <div>正在上映22</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映</div>
          <div>正在上映</div>
          <div>正在5上映45</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映33</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正2在上映</div>
          <div>正在上85映</div>
          <div>正在上映</div>
          <div>正在8上映</div>
          <div>正在上映</div>
          <div>正在5上映44</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上2映</div>
          <div>正在上映</div>
          <div>正在上映55</div>
          <div>正在上映66</div>
          <div>正在上映</div>
          <div>正在上映88</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映889</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映11</div>
          <div>正在上映</div>
          <div>正在55上映</div>
          <div>正在上5映</div>
          <div>正在上映</div>
          <div>正在上映22</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映</div>
          <div>正在上映</div>
          <div>正在5上映45</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映33</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正2在上映</div>
          <div>正在上85映</div>
          <div>正在上映</div>
          <div>正在8上映</div>
          <div>正在上映</div>
          <div>正在5上映44</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上2映</div>
          <div>正在上映</div>
          <div>正在上映55</div>
          <div>正在上映66</div>
          <div>正在上映</div>
          <div>正在上映88</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映889</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上映11</div>
          <div>正在上映</div>
          <div>正在55上映</div>
          <div>正在上5映</div>
          <div>正在上映</div>
          <div>正在上映22</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映</div>
          <div>正在上映</div>
          <div>正在5上映45</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在2上映33</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正2在上映</div>
          <div>正在上85映</div>
          <div>正在上映</div>
          <div>正在8上映</div>
          <div>正在上映</div>
          <div>正在5上映44</div>
          <div>正在上映</div>
          <div>正在上映</div>
          <div>正在上2映</div>
          <div>正在上映</div>
          <div>正在上映55</div>
          </div>
          </Scroll>
         
        </div>
      );
  }
}

export default OnShow;