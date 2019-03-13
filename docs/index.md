### 常用命令
### 1、$ netstat -a / -n
   -a : 查看所有连接和监听端口
   -n : 显示ip地址和端口号， 不显示域名和服务名
### 1.1、 nslookup www.baidu.com
 查看 www.baidu.com IP地址

### 2、解压文件：
1、*.tar 用 tar -xvf 解压

2、*.gz 用 gzip -d或者gunzip 解压

3、*.tar.gz和*.tgz 用 tar -xzf 解压

4、*.bz2 用 bzip2 -d或者用bunzip2 解压

5、*.tar.bz2用tar -xjf 解压

6、*.Z 用 uncompress 解压

7、*.tar.Z 用tar -xZf 解压

8、*.rar 用 unrar e解压

9、*.zip 用 unzip 解压



解压jdk到指定文件夹：

tar -xzvf jdk-8u131-linux-x64.tar.gz -C /usr/local/java



### 3、压缩文件

tar -cvf jpg.tar *.jpg //将目录里所有jpg文件打包成tar.jpg

tar -czf jpg.tar.gz *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz

 tar -cjf jpg.tar.bz2 *.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，生成一个bzip2压缩过的包，命名为jpg.tar.bz2

tar -cZf jpg.tar.Z *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，生成一个umcompress压缩过的包，命名为jpg.tar.Z

rar a jpg.rar *.jpg //rar格式的压缩，需要先下载rar for linux

zip jpg.zip *.jpg //zip格式的压缩，需要先下载zip for linux

### 4、scp
#### 从 本地 复制到 远程
* 复制文件：
        * 命令格式：
                scp local_file remote_username@remote_ip:remote_folder
                或者
                scp local_file remote_username@remote_ip:remote_file
                或者
                scp local_file remote_ip:remote_folder
                或者
                scp local_file remote_ip:remote_file

                第1,2个指定了用户名，命令执行后需要再输入密码，第1个仅指定了远程的目录，文件名字不变，第2个指定了文件名；
                第3,4个没有指定用户名，命令执行后需要输入用户名和密码，第3个仅指定了远程的目录，文件名字不变，第4个指定了文件名；
        * 例子：
                scp /home/space/music/1.mp3 root@www.cumt.edu.cn:/home/root/others/music
                scp /home/space/music/1.mp3 root@www.cumt.edu.cn:/home/root/others/music/001.mp3
                scp /home/space/music/1.mp3 www.cumt.edu.cn:/home/root/others/music
                scp /home/space/music/1.mp3 www.cumt.edu.cn:/home/root/others/music/001.mp3
#### 从 远程 复制到 本地
从 远程 复制到 本地，只要将 从 本地 复制到 远程 的命令 的 后2个参数 调换顺序 即可；

例如：
        scp root@www.cumt.edu.cn:/home/root/others/music /home/space/music/1.mp3
        scp -r www.cumt.edu.cn:/home/root/others/ /home/space/music/

最简单的应用如下 :

scp 本地用户名 @IP 地址 : 文件名 1 远程用户名 @IP 地址 : 文件名 2

[ 本地用户名 @IP 地址 :] 可以不输入 , 可能需要输入远程用户名所对应的密码 .

### 5、ifconfig 临时配置ip
$ ifconfig eht0(第几块网卡)  192.168.0.200  netmask 255.255.255.0
### 6、 查找（通过管道）
ll /etc/ | grep 'passwd'

/etc/: 哪个目录
‘passwod’： 关键字
### 7、mac下用户切换
sudo  -i    // 普通 ---> root用户
su - 用户名(-和用户名之间要有空格)    ／／ 反之
### 8、 建立 多个文件
 midkr（文件目录）/touch(空白文档)  test{1,2,3,4}
### 9、 history
查看输入的 历史指令

### 10、查找
find /home -name "*.txt"
### 11、 修改权限 chmod
chmod u=rwx,g=rw,o=r checking
//  -rwxrw-r--
u: user
g: group
o: other
a: all

### 12、修改拥有者（用户） chown 用户 指定文件名
id daemon （查看用户是否存在）
 chown daemon checking

### 13、wget 下载命令
wget http://xxxxx.tar.gz

### 14、防火墙
   service firewalld start

   service firewalld stop
### 15、 关键字查找
grep ‘energywise’ *           #在当前目录搜索带'energywise'行的文件

grep -r ‘energywise’ *        #在当前目录及其子目录下搜索'energywise'行的文件
grep -l -r ‘energywise’ *     #在当前目录及其子目录下搜索'energywise'行的文件，但是不显示匹配的行，只显示匹配的文件
### 16、强制杀死nginx进程
pkill  -9 nginx
