// ===================== Callback Example =====================

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
        setTimeout(() => {
          console.log('5 seconds passed');
          setTimeout(() => {
            console.log('6 seconds passed');
            setTimeout(() => {
              console.log('7 seconds passed');
              setTimeout(() => {
                console.log('8 seconds passed');
                setTimeout(() => {
                  console.log('9 seconds passed');
                  setTimeout(() => {
                    console.log('10 seconds passed');
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
