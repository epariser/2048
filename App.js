import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class App extends React.Component {
  state = {
    board: [
    [2, 0, 2, 4],
    [0, 2, 0, 2], 
    [2, 2, 4, 2], 
    [0, 4, 4, 2]
    ], 
  };

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        break;
      case SWIPE_DOWN:
        break;
      case SWIPE_LEFT:
        break;
      case SWIPE_RIGHT:
        break;
    }
  }


  /*   ****************     */
  shiftUp = () => {
    let tempBoard = this.state.board;

    for (let j = 0; j <= 3; j++) {
      let topNum = tempBoard[0][j];
      let secndNum = tempBoard[1][j];
      let thrdNum = tempBoard[2][j];
      let bottomNum = tempBoard[3][j];
       
      
      if (tempBoard[0][j] == 0) {/* shifts up if top row is 0 */
        if (tempBoard[1][j] == 0) {/*second row*/
          if (tempBoard[2][j] == 0) {/*third row*/
            tempBoard[0][j] = tempBoard[3][j];
            tempBoard[3][j] = 0;
          } else {
            tempBoard[0][j] = tempBoard[2][j];
            tempBoard[1][j] = tempBoard[3][j];
            tempBoard[2][j] = 0;
            tempBoard[3][j] = 0;
          }
        } else {
          tempBoard[0][j] = tempBoard[1][j];
          tempBoard[1][j] = tempBoard[2][j];
          tempBoard[2][j] = tempBoard[3][j];
          tempBoard[3][j] = 0;
        } 
    }
        /*if seccond row is zero. */
        
        if (secndNum == 0) { 
          if (thrdNum == 0) {
            tempBoard[1][j] = tempBoard[3][j];
            tempBoard[3][j] = 0; 
          }
        } 
         
        else if(secndNum == 0) { 
            tempBoard[1][j] = tempBoard[2][j];
            tempBoard[2][j] = tempBoard[3][j];
            tempBoard[3][j] = 0; 
          } 
        
         if (thrdNum == 0 && bottomNum != 0) { 
            tempBoard[2][j] = tempBoard[3][j];
            tempBoard[3][j] = 0; 
          }   

    } 

    //ads the like nums together
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j <= 3; j++) {

        if (tempBoard[i][j] == tempBoard[i + 1][j]) {
          tempBoard[i][j] = tempBoard[i][j] + tempBoard[i + 1][j];
          tempBoard[i + 1][j] = 0;
        }
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j <= 3; j++) {
        let topNum = tempBoard[i][j];

        if (topNum == 0) {
          tempBoard[i][j] = tempBoard[i + 1][j];
          tempBoard[i + 1][j] = 0;
        }
      }
    }
    
    
    if(tempBoard[0][0] == 0)
        tempBoard[0][0] = 2
        else if (tempBoard[0][1] == 0)
        tempBoard[0][1] = 2
        else if (tempBoard[0][2] == 0)
        tempBoard[0][2] = 2
        else if (tempBoard[0][3] == 0)
        tempBoard[0][3] = 2
        else if(tempBoard[2][0] == 0)
        tempBoard[2][0] = 2
        else if (tempBoard[2][1] == 0)
        tempBoard[2][1] = 2
        else if (tempBoard[2][2] == 0)
        tempBoard[2][2] = 2
        else if (tempBoard[2][3] == 0)
        tempBoard[2][3] = 2
        else if(tempBoard[1][0] == 0)
        tempBoard[1][0] = 2
        else if (tempBoard[1][1] == 0)
        tempBoard[1][1] = 2
        else if (tempBoard[1][2] == 0)
        tempBoard[1][2] = 2
        else if (tempBoard[1][3] == 0)
        tempBoard[1][3] = 2
        else if(tempBoard[3][0] == 0)
        tempBoard[3][0] = 2
        else if (tempBoard[3][1] == 0)
        tempBoard[3][1] = 2
        else if (tempBoard[3][2] == 0)
        tempBoard[3][2] = 2
        else if (tempBoard[3][3] == 0)
        tempBoard[3][3] = 2


    this.setState({ board: tempBoard });
  };

  /*   **********************     */
  shiftDown = () => {
    let tempBoard = this.state.board;

    for (let j = 0; j <= 3; j++) {
      let topNum = tempBoard[0][j];
      let secndNum = tempBoard[1][j];
      let thrdNum = tempBoard[2][j];
      let bottomNum = tempBoard[3][j];
       
      
      if (tempBoard[3][j] == 0) {/* shifts up if top row is 0 */
        if (tempBoard[2][j] == 0) {/*second row*/
          if (tempBoard[1][j] == 0) {/*third row*/
            tempBoard[3][j] = tempBoard[0][j];
            tempBoard[0][j] = 0;
          } else {
            tempBoard[3][j] = tempBoard[1][j];
            tempBoard[2][j] = tempBoard[0][j];
            tempBoard[1][j] = 0;
            tempBoard[0][j] = 0;
          }
        } else {
          tempBoard[3][j] = tempBoard[2][j];
          tempBoard[2][j] = tempBoard[1][j];
          tempBoard[1][j] = tempBoard[0][j];
          tempBoard[0][j] = 0;
        } 
    }
        /*if seccond row is zero. */
        
        if (thrdNum == 0) { 
          if (secndNum == 0) {
            tempBoard[2][j] = tempBoard[0][j];
            tempBoard[0][j] = 0; 
          } else { 
              tempBoard[1][j] = tempBoard[2][j];
              tempBoard[2][j] = tempBoard[3][j];
              tempBoard[3][j] = 0; 
          } 
        } 
        
         if (secndNum == 0 && topNum != 0) { 
            tempBoard[1][j] = tempBoard[0][j];
            tempBoard[0][j] = 0; 
          }   

    } 
    //adds the like nums together 
    
    for (let i = 3; i > 0; i--) {
      for (let j = 0; j <= 3; j++) {


        if (tempBoard[i][j] == tempBoard[i - 1][j]) {
          tempBoard[i][j] = tempBoard[i][j] + tempBoard[i - 1][j];
          tempBoard[i - 1][j] = 0;
        }
      }
    }

    for (let i = 3; i > 0; i--) {
      for (let j = 0; j <= 3; j++) {
        let topNum = tempBoard[i][j];

        if (topNum == 0) {
          tempBoard[i][j] = tempBoard[i - 1][j];
          tempBoard[i - 1][j] = 0;
        }
      }
    } 



    if(tempBoard[0][0] == 0)
        tempBoard[0][0] = 2
        else if (tempBoard[0][1] == 0)
        tempBoard[0][1] = 2
        else if (tempBoard[0][2] == 0)
        tempBoard[0][2] = 2
        else if (tempBoard[0][3] == 0)
        tempBoard[0][3] = 2
        else if(tempBoard[2][0] == 0)
        tempBoard[2][0] = 2
        else if (tempBoard[2][1] == 0)
        tempBoard[2][1] = 2
        else if (tempBoard[2][2] == 0)
        tempBoard[2][2] = 2
        else if (tempBoard[2][3] == 0)
        tempBoard[2][3] = 2
        else if(tempBoard[1][0] == 0)
        tempBoard[1][0] = 2
        else if (tempBoard[1][1] == 0)
        tempBoard[1][1] = 2
        else if (tempBoard[1][2] == 0)
        tempBoard[1][2] = 2
        else if (tempBoard[1][3] == 0)
        tempBoard[1][3] = 2
        else if(tempBoard[3][0] == 0)
        tempBoard[3][0] = 2
        else if (tempBoard[3][1] == 0)
        tempBoard[3][1] = 2
        else if (tempBoard[3][2] == 0)
        tempBoard[3][2] = 2
        else if (tempBoard[3][3] == 0)
        tempBoard[3][3] = 2


    this.setState({ board: tempBoard }); 
  };


  /*   ************************     */
  shiftLeft = () => {
    let tempBoard = this.state.board;

    for (let i = 0; i <= 3; i++) {
      let topNum = tempBoard[i][0];
      let secndNum = tempBoard[i][1];
      let thrdNum = tempBoard[i][2];
      let bottomNum = tempBoard[i][3];
       
      
      if (tempBoard[i][0] == 0) {/* shifts up if top row is 0 */
        if (tempBoard[i][1] == 0) {/*second row*/
          if (tempBoard[i][2] == 0) {/*third row*/
            tempBoard[i][0] = tempBoard[i][3];
            tempBoard[i][3] = 0;
          } else {
            tempBoard[i][0] = tempBoard[i][2];
            tempBoard[i][1] = tempBoard[i][3];
            tempBoard[i][2] = 0;
            tempBoard[i][3] = 0;
          }
        } else {
          tempBoard[i][0] = tempBoard[i][1];
          tempBoard[i][1] = tempBoard[i][2];
          tempBoard[i][2] = tempBoard[i][3];
          tempBoard[i][3] = 0;
        } 
    }
        /*if seccond row is zero. */
        
        if (tempBoard[i][1] == 0) { 
          if (tempBoard[i][2] == 0) {
            tempBoard[i][1] = tempBoard[i][3]; 
            tempBoard[i][3] = 0; 
          } else  { 
              tempBoard[i][1] = tempBoard[i][2];
              tempBoard[i][2] = tempBoard[i][3];
              tempBoard[i][3] = 0; 
          } 
        } 
         
        
         if (thrdNum == 0 && bottomNum != 0) { 
            tempBoard[i][2] = tempBoard[i][3];
            tempBoard[i][3] = 0; 
          }   

    } 

    //ads the like nums together
    
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j < 3; j++) { 

        if (tempBoard[i][j] == tempBoard[i][j + 1]) {
          tempBoard[i][j] = tempBoard[i][j] + tempBoard[i][j + 1];
          tempBoard[i][j + 1] = 0;
        }
      }
    }

    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j < 3; j++) {
        let topNum = tempBoard[i][j];

        if (topNum == 0) {
          tempBoard[i][j] = tempBoard[i][j + 1];
          tempBoard[i][j + 1] = 0;
        }
      }
    }  


    if(tempBoard[0][0] == 0)
        tempBoard[0][0] = 2
        else if (tempBoard[0][1] == 0)
        tempBoard[0][1] = 2
        else if (tempBoard[0][2] == 0)
        tempBoard[0][2] = 2
        else if (tempBoard[0][3] == 0)
        tempBoard[0][3] = 2
        else if(tempBoard[2][0] == 0)
        tempBoard[2][0] = 2
        else if (tempBoard[2][1] == 0)
        tempBoard[2][1] = 2
        else if (tempBoard[2][2] == 0)
        tempBoard[2][2] = 2
        else if (tempBoard[2][3] == 0)
        tempBoard[2][3] = 2
        else if(tempBoard[1][0] == 0)
        tempBoard[1][0] = 2
        else if (tempBoard[1][1] == 0)
        tempBoard[1][1] = 2
        else if (tempBoard[1][2] == 0)
        tempBoard[1][2] = 2
        else if (tempBoard[1][3] == 0)
        tempBoard[1][3] = 2
        else if(tempBoard[3][0] == 0)
        tempBoard[3][0] = 2
        else if (tempBoard[3][1] == 0)
        tempBoard[3][1] = 2
        else if (tempBoard[3][2] == 0)
        tempBoard[3][2] = 2
        else if (tempBoard[3][3] == 0)
        tempBoard[3][3] = 2

    
    this.setState({ board: tempBoard });
  };

  /*   ************************     */
  shifRight = () => {
    let tempBoard = this.state.board;

    for (let i = 0; i <= 3; i++) {
      let topNum = tempBoard[i][3];
      let secndNum = tempBoard[i][2];
      let thrdNum = tempBoard[i][1];
      let bottomNum = tempBoard[i][0];
       
      
      if (tempBoard[i][3] == 0) {/* shifts up if top row is 0 */
        if (tempBoard[i][2] == 0) {/*second row*/
          if (tempBoard[i][1] == 0) {/*third row*/
            tempBoard[i][3] = tempBoard[i][0];
            tempBoard[i][0] = 0;
          } else {
            tempBoard[i][3] = tempBoard[i][1];
            tempBoard[i][2] = tempBoard[i][0];
            tempBoard[i][1] = 0;
            tempBoard[i][0] = 0;
          }
        } else {
          tempBoard[i][3] = tempBoard[i][2];
          tempBoard[i][2] = tempBoard[i][1];
          tempBoard[i][1] = tempBoard[i][0];
          tempBoard[i][0] = 0;
        } 
    }
        /*if seccond row is zero. */
        
        if (tempBoard[i][2] == 0) { 
          if (tempBoard[i][1] == 0) {
            tempBoard[i][2] = tempBoard[i][0]; 
            tempBoard[i][0] = 0; 
          } else  { 
              tempBoard[i][2] = tempBoard[i][1];
              tempBoard[i][1] = tempBoard[i][0];
              tempBoard[i][0] = 0; 
          } 
        } 
         
        
         if (thrdNum == 0 && bottomNum != 0) { 
            tempBoard[i][1] = tempBoard[i][0];
            tempBoard[i][0] = 0; 
          }   

    } 

    //adds the like nums together
    
    for (let i = 0; i <= 3; i++) {
      for (let j = 3; j > 0; j--) { 

        if (tempBoard[i][j] == tempBoard[i][j - 1]) {
          tempBoard[i][j] = tempBoard[i][j] + tempBoard[i][j - 1];
          tempBoard[i][j - 1] = 0;
        }
      }
    }

    for (let i = 0; i <= 3; i++) {
      for (let j = 3; j > 0; j--) {
        let topNum = tempBoard[i][j];

        if (topNum == 0) {
          tempBoard[i][j] = tempBoard[i][j - 1];
          tempBoard[i][j - 1] = 0;
        }
      }
    }  
    
    
    if(tempBoard[0][0] == 0)
        tempBoard[0][0] = 2
        else if (tempBoard[0][1] == 0)
        tempBoard[0][1] = 2
        else if (tempBoard[0][2] == 0)
        tempBoard[0][2] = 2
        else if (tempBoard[0][3] == 0)
        tempBoard[0][3] = 2
        else if(tempBoard[2][0] == 0)
        tempBoard[2][0] = 2
        else if (tempBoard[2][1] == 0)
        tempBoard[2][1] = 2
        else if (tempBoard[2][2] == 0)
        tempBoard[2][2] = 2
        else if (tempBoard[2][3] == 0)
        tempBoard[2][3] = 2
        else if(tempBoard[1][0] == 0)
        tempBoard[1][0] = 2
        else if (tempBoard[1][1] == 0)
        tempBoard[1][1] = 2
        else if (tempBoard[1][2] == 0)
        tempBoard[1][2] = 2
        else if (tempBoard[1][3] == 0)
        tempBoard[1][3] = 2
        else if(tempBoard[3][0] == 0)
        tempBoard[3][0] = 2
        else if (tempBoard[3][1] == 0)
        tempBoard[3][1] = 2
        else if (tempBoard[3][2] == 0)
        tempBoard[3][2] = 2
        else if (tempBoard[3][3] == 0)
        tempBoard[3][3] = 2


    this.setState({ board: tempBoard });
  };

  /*   ************************     */


 
render() {
         const config = {
      directionalOffsetThreshold: 80
    };
    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={this.shiftUp}
        onSwipeDown={this.shiftDown}
        onSwipeLeft={this.shiftLeft}
        onSwipeRight={this.shifRight} 
        config={config} 
        style={styles.container}>
      <View style={styles.container}>
      {this.state.board.map((row, index) => (
          <View style={{ flexDirection: 'row' }}>
            {row.map((tile, index) => (
              <View style={styles.boxes}>
                <Text style={styles.paragraph}>{tile}</Text>
              </View>
            ))}
          </View>
        ))}
        <Text style={styles.paragraph}>
        </Text>
      </View>
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxes: {
    flex: 1,
    width: 100,
    height: 100,
    borderWidth: 2,
    backgroundColor: '#cfc500',
  },
});
