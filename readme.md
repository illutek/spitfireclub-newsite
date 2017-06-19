## Spitfireclub Vlaanderen vzw

Een eindwerk voor het cvo in Heusden-Zolder http://www.cvodeverdieping.be/  
In opdracht van Koen Timmers https://www.zelfstudie.be/

De files in deze git repository zijn de sources files voor de template.  
Stappen om template op te zetten.   
1. Clone of download deze repository uiteraard.  
2. bower install om de bower componenten.  
3. npm install voor automatie tool gulp.  
4. run gulp voor sass compileren.  
5. run gulp dist on dist folder op te bouwen.  

### TOOLS VOOR THEMING

#### PHOTOSHOP CS6

#### BOWER
https://bower.io/  
Als package manager voor template afhankelijke componenten 
- bootstrap https://getbootstrap.com
- backstretch https://github.com/jquery-backstretch/jquery-backstretch
- fontawesome http://fontawesome.io  

(file bower.json - directory bower_components)
#### NPM
https://www.npmjs.com/  
Als package manager voor produktie tools enkel gulp 
http://gulpjs.com/   
een automate tool hier als sass compiler en voor het aanmaken van dist folder  
maar ook het comprimeren van afbeeldingen
- gulp
- gulp-rimraf
- gulp-plumber
- gulp-rename
- gulp-sass
- gulp-sourcemaps
- gulp-imagemin   

(file gulpfile.js)  
(file voor npm package.json - directory node_modules)  

##### YARN  
Ook een package manager - tegen hanger van npm dit ook eens getest vandaar
het yarn.lock file.  
Een aantal voordelen tov npm (vooral snelheid)  
https://yarnpkg.com/lang/en/

#### GIT
Met deze keer een GUI https://www.gitkraken.com/   
Github https://github.com/illutek/spitfireclub-newsite 

#### PhpStorm
https://www.jetbrains.com/phpstorm/  
PhpStorm is perfect for working with Symfony, Drupal, WordPress, Zend 
Framework, Laravel, Magento, Joomla!, CakePHP, Yii, and other frameworks.  

### CMS DRUPAL8
https://www.drupal.org/  

#### Modules  

- Backup_migrate https://www.drupal.org/project/backup_migrate  
- Pathauto https://www.drupal.org/project/pathauto  
- Colorbox  https://www.drupal.org/project/colorbox  
- Webform  https://www.drupal.org/project/webform
- Honeypot  https://www.drupal.org/project/honeypot
- xmlsitemap  https://www.drupal.org/project/xmlsitemap
- Google analytics https://www.drupal.org/project/google_analytics
- Metatag  https://www.drupal.org/project/metatag 
- Twig Field Value https://www.drupal.org/project/twig_field_value

De libraries die bij webform horen met drush webform-libraries-composer

### Local environment  

- Laptop in docker container met  https://github.com/wodby/docker4drupal  
- Local server CentOS  

##### Reclame voor sass syntax

De scss syntax.  

```
a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: white;
    }
}
```
De sass syntax

```
a
  color: white
  text-decoration: none
  &:hover
    text-decoration: none
    color: white
```  

Nadeel de vele voorbeeld code is meestal in scss geschreven dus enig aanpassingen 
elke keer.



![ps-256x256](https://user-images.githubusercontent.com/7737763/27281001-5a5b3588-54ea-11e7-8bae-d9daac849673.png)
![bootstrap](https://user-images.githubusercontent.com/7737763/27281319-ad0ef584-54eb-11e7-90c2-2f7a5d2d9b87.png)
![bower](https://user-images.githubusercontent.com/7737763/27281321-af9edd78-54eb-11e7-8564-3782dcc37f19.png)
![docker](https://user-images.githubusercontent.com/7737763/27281401-053418ac-54ec-11e7-944f-8dc3aee14283.png)
![drupal8](https://user-images.githubusercontent.com/7737763/27281404-070df918-54ec-11e7-9fdb-52c9e122c84b.png)
![font_awesome](https://user-images.githubusercontent.com/7737763/27281407-0939fe12-54ec-11e7-99f3-b4331e098d9b.png)
![git](https://user-images.githubusercontent.com/7737763/27281411-0b05fb1a-54ec-11e7-828c-7bf5cedb8a4d.png)
![github](https://user-images.githubusercontent.com/7737763/27281413-0ce5ce92-54ec-11e7-900f-880f2a4bba57.png)
![gulp](https://user-images.githubusercontent.com/7737763/27281416-0ea50b26-54ec-11e7-87b2-58e5eb38d730.png)
![npm](https://user-images.githubusercontent.com/7737763/27281418-11a84c20-54ec-11e7-8bfe-3e1788ad9d7d.png)
![phpstorm](https://user-images.githubusercontent.com/7737763/27281422-14089f24-54ec-11e7-85fc-0be288574d20.png)
![sass](https://user-images.githubusercontent.com/7737763/27281423-157a2abc-54ec-11e7-9830-4384d6dd410c.png)
![yarn](https://user-images.githubusercontent.com/7737763/27281424-16b29c20-54ec-11e7-9798-cd9df1e61d6f.png)
