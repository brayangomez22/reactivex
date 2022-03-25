# RXJS

* The first thing we must do after downloading the code is to execute the command:

```
npm install
```
That command will download all the node modules needed to run the project.


* When finished installing the node_modules, then we can run the project with the following command

```
npm start
```
For that to work, remember to run that command in the same directory where the ```package.json``` is located.

## change the port
By default, the port I set for this project is ```8081```, but if you need to change it because that port might be used by your computer, you can change it by opening the ```package.json``` >> scripts . There you will see the instruction that launches the development server

```
"start": "webpack serve --mode development --open --port=8081"
```

Simply change the port to the one you need and that's it. (of course they save the changes before executing ```npm start``` again)


