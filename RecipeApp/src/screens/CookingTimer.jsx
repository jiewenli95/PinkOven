import React from 'react';
import {Text, 
        View, 
        TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import PinkOvensHeader from './Header';
import styles from'./TimerStyle';

/**
 * Renders the Timer.
 * The time starts after pressing the 'start' button and in the meanwhile, the 'clear' button will be disabled.
 * After pressing the 'stop' button, the 'clear' button would be enabled to click.
 */
export default function Timer() {

    const [isActive, setActive] = useState(false);
    const [seconds, setSeconds] = useState(0);

    // This effect will be re-called whenever the isActive and seconds values change.
    // The effect function sts the time interval called after 1000ms.
    
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 1000);

        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const minutes = Math.floor(seconds / 60);
    const secondsAfter60 = seconds > 60 ? seconds - 60 * minutes : seconds;

    return (
        <View>
            <PinkOvensHeader />
            <Text style={styles.cookingTimerText}>Cooking Time</Text>
            <Text style={styles.timerText}>{minutes.toString().padStart(2, '0')}: {secondsAfter60.toString().padStart(2, '0')}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttons} onPress={() => setActive(!isActive)} >
                    <Text style={styles.buttonText}>{isActive ? 'STOP' : 'START'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={isActive ? styles.disabled : styles.buttons} disabled={isActive ? true : false} onPress={() => setSeconds(0)}>
                    <Text style={styles.buttonText}>CLEAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}
