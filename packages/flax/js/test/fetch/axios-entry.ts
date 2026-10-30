// The original Axios Fetch adapter is bundled without modifying its implementation.
import axios from 'axios';
Object.assign(globalThis, { axios });
