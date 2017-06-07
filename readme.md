## Spitfireclub Vlaanderen vzw

Een eindwerk voor het cvo in Heusden-Zolder http://www.cvodeverdieping.be/  
In opdracht van Koen Timmers https://www.zelfstudie.be/

De files in deze git repository zijn de sources files voor de template, de template zelf 
komt in de dist folder met de gulp functie dist.

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
elke keer



 