# 说说git的flow
- 一套使用Git进行源代码管理时的一套行为规范和，通过利用Git创建和管理分支的能力

### Branch：
Branch是gitfolw的核心。主要分为两大类 Main Branchs 和 Supporting branches, 其中 Main Branchs 中又包含了 Master 和 Develop，而 Supporting branches 中包含了 Feature 、Release、Hotfix 以及其他自定义分支，

### Master：
master分支上存放的是最稳定的正式版的代码，并且该分支的代码应该是随时可在开发环境中使用的代码（Production Ready state）。当一个版本开发完毕后，产生了一份新的稳定的可供发布的代码时，master分支上的代码要被更新，同时，每一次更新，都需要在master上打上对应的版本号(tag)。

### Develop：
develop分支是保存当前最新版本开发成果的分支。该分支上的代码允许有BUG，但是必须保证编译通过，且该分支可以作为每天夜间测试的分支(如果有夜间测试的话)所以该分支也叫做Nightly build。当develop分支上的代码已实现了软件需求说明书中所有的功能(必须经过开发自测，但是不必经过QA)且相对稳定时候，就可以基于此分支来拉出新的release分支交付QA进行测试。

### Feature：
Feature分支通常叫做功能分支，也可以叫做个人分支，一般命名为 feature/XXXX,该分支就是每一个开发人员进行开发的分支，比如做一些功能、需求之类的东西，这个分支上的代码变更最终合并回develop分支或者干脆被抛弃掉（例如实验性且效果不好的代码变更）。一般而言，feature分支代码可以保存在开发者自己的代码库中而不强制提交到主代码库里。

### Release：
Release分支通常叫做发布分支，也可以叫做测试-发布分支，一般命名为 Release/1.2.3（后面是版本号）,该分支是为测试-发布新的产品版本而开辟的。因为包含测试流程，所以在这个分支上的代码允许做小的缺陷修正、准备发布版本所需的各项说明信息（版本号、发布时间、编译时间等等）。通过在release分支上进行这些工作可以让develop分支空闲出来以接受新的feature分支上的代码提交，进入新的软件开发迭代周期。注意：该分支上的代码一定是可编译可运行的，允许包含小BUG

### Hotfix：
Hotfix叫热修复分支，除了是计划外创建的以外，hotfix分支与release分支十分相似，当已经发布的版本（Master上代码）遇到了异常情况或者发现了严重到必须立即修复的软件缺陷的时候，就需要从master分支上指定的tag版本拉取hotfix分支来组织代码的紧急修复工作。这样做的显而易见的好处是不会打断正在进行的develop分支的开发工作，能够让团队中负责新功能开发的人与负责代码紧急修复的人并行、独立的开展工作。

# 总结
git Flow开发模型从源代码管理角度对通常意义上的软件开发活动进行了约束。应该说，为我们的软件开发提供了一个可供参考的管理模型。Git Flow开发模型让开发代码仓库保持整洁，让小组各个成员之间的开发相互隔离，能够有效避免处于开发状态中的代码相互影响而导致的效率低下和混乱。
